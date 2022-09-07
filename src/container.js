import { createContainer, asClass, InjectionMode, Lifetime, asFunction, asValue } from "awilix";
import { scopePerRequest } from "awilix-express";
import config from "config";
import MongoDB from "base/database/MongoDBManager";
import mongodbModels from "containers/models";
import logger from "base/logger";
import routes from "interfaces/rest/routes/router";
import restServer from "interfaces/rest/Server";
import StorageService from "base/storage/Cloudinary";
import PaymentService from "base/payments/Stripe";

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
      "containers/*/*Enitiy.js",
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
