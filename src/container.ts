import { asClass, asFunction, asValue, createContainer, InjectionMode, Lifetime } from "awilix";
import { scopePerRequest } from "awilix-express";
import MongoDB from "base/database/MongoDBManager";
import RedisDBManager from "base/database/RedisDBManager";
import logger from "base/logger";
import PaymentService from "base/payments/Stripe";
import StorageService from "base/storage/Cloudinary";
import config from "config";
import mongodbModels from "containers/models";
import ErrorHandler from "interfaces/rest/middlewares/errorHandler";
import Error404 from "interfaces/rest/middlewares/notFoundHandler";
import ResponseManager from "interfaces/rest/response/ResponseBuilder";
import routes from "interfaces/rest/routes";
import restServer from "interfaces/rest/Server";

const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  config: asValue(config),
  db: asClass(MongoDB).singleton(),
  cache: asClass(RedisDBManager).singleton(),
  models: asValue(mongodbModels),
  logger: asValue(logger),
  containerMiddleware: asValue(scopePerRequest(container)),
  routes: asFunction(routes),
  responseBuilder: asClass(ResponseManager).singleton(),
  error404: asValue(Error404),
  errorHandler: asValue(ErrorHandler),
  restServer: asClass(restServer),
  storageService: asClass(StorageService).singleton(),
  paymentService: asClass(PaymentService).singleton(),
});

container.loadModules(
  [
    // Load use-cases
    [
      "app/**/*!(index.js).ts",
      {
        lifetime: Lifetime.SCOPED,
        register: asClass,
      },
    ],
    // Load repositories
    [
      "containers/*/*Repository.ts",
      {
        lifetime: Lifetime.SCOPED,
        register: asClass,
      },
    ],
  ],
  {
    formatName: "camelCase",
    resolverOptions: {},
    cwd: __dirname,
  },
);

container.loadModules(
  [
    // Load entities
    [
      "containers/*/*Entity.ts",
      {
        lifetime: Lifetime.SCOPED,
        register: asClass,
      },
    ],
  ],
  {
    resolverOptions: {},
    cwd: __dirname,
  },
);

export default container;
