import { Config } from "convict";
import express, { Router } from "express";
import http, { Server } from "http";
import path from "path";
import { Logger } from "winston";

/**
 * Creates and configures an HTTP server
 */
class RestServer {
  config: Config<unknown>;
  server: Server;
  logger: Logger;

  constructor({ config, routes, logger }: { config: Config<unknown>; routes: Router; logger: Logger }) {
    const app = express();
    app.disable("x-powered-by");
    // URL for API documentation
    app.use("/rest-docs", express.static(path.resolve(__dirname, "../../../docs/apidocs/")));

    app.use(routes);
    app.use("/v1/payments/", express.static(path.join(__dirname, "public/")));
    this.server = http.createServer(app);
    this.config = config;
    this.logger = logger;
  }

  async start() {
    const port = this.config.get("app.httpPort");
    const serviceName = this.config.get("app.serviceName");
    const serviceVersion = this.config.get("app.serviceVersion");
    return this.server.listen(port, () => {
      this.logger.info(`REST server for ${serviceName} v${serviceVersion} listening on port ${port}`);
    });
  }

  close(cb: any) {
    return this.server.close(cb);
  }
}

export default RestServer;
