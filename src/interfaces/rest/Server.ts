import { RewriteFrames } from "@sentry/integrations";
import express, { Router } from "express";
import { ConvictConfig } from "helpers/types";
import http, { Server } from "http";
import path from "path";
import { Logger } from "winston";

/**
 * Creates and configures an HTTP server
 */
class RestServer {
  config: ConvictConfig;
  server: Server;
  logger: Logger;

  constructor({
    config,
    routes,
    logger,
    Sentry,
  }: {
    config: ConvictConfig;
    routes: Router;
    logger: Logger;
    Sentry: any;
  }) {
    const app = express();
    app.disable("x-powered-by");
    // URL for API documentation
    const dsn = config.get("sentry.dsn");
    Sentry.init({
      dsn,
      integrations: [
        // enable HTTP calls tracing
        new Sentry.Integrations.Http({ tracing: true }),
        new RewriteFrames({
          root: global.__dirname,
        }),
        // Automatically instrument Node.js libraries and frameworks
        ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
      ],

      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0,
    });

    // RequestHandler creates a separate execution context, so that all
    // transactions/spans/breadcrumbs are isolated across requests
    app.use(Sentry.Handlers.requestHandler());
    // TracingHandler creates a trace for every incoming request
    app.use(Sentry.Handlers.tracingHandler());
    app.use("/rest-docs", express.static(path.resolve(__dirname, "../../../docs/apidocs/")));
    app.use(routes);
    app.use("/v1/payments/", express.static(path.join(__dirname, "public/")));
    this.server = http.createServer(app);
    this.config = config;
    this.logger = logger;
  }

  async start() {
    console.log("here");
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
