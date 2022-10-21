import { asClass, asFunction, asValue, createContainer, InjectionMode, Lifetime } from "awilix";
import { scopePerRequest } from "awilix-express";
import MongoDB from "base/database/MongoDBManager";
import logger from "base/logger";
import PaymentService from "base/payments/Stripe";
import StorageService from "base/storage/Cloudinary";
import config from "config";
import mongodbModels from "containers/models";
import routes from "interfaces/rest/routes/router";
import restServer from "interfaces/rest/Server";

const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  config: asValue(config),
  db: asClass(MongoDB).singleton(),
  models: asValue(mongodbModels),
  logger: asValue(logger),
  containerMiddleware: asValue(scopePerRequest(container)),
  routes: asFunction(routes),
  restServer: asClass(restServer),
  storageService: asClass(StorageService).singleton(),
  paymentService: asClass(PaymentService).singleton(),
});

container.loadModules(
  [
    // Load use-cases
    [
      "app/**/*!(index.js).js",
      {
        lifetime: Lifetime.SCOPED,
        register: asClass,
      },
    ],
    // Load repositories
    [
      "containers/*/*Repository.js",
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
      "containers/*/*Entity.js",
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
