import { Server } from "http";
import { Mongoose } from "mongoose";
import { Logger } from "winston";
/**
 * Manages application interfaces e.g REST server, gRPC server
 */
class App {
  restServer: any;
  logger: Logger;
  mongo: any;
  redis: any;
  queue: any;

  constructor({
    restServer,
    logger,
    mongo,
    redis,
    queue,
  }: {
    restServer: Server;
    logger: Logger;
    mongo: Mongoose;
    redis: any;
    queue: any;
  }) {
    this.restServer = restServer;
    this.logger = logger;
    this.mongo = mongo;
    this.redis = redis;
    this.queue = queue;
  }

  /**
   * Starts the application interfaces to begin handling user requests
   */
  async start() {
    await this.mongo.connect();
    await this.redis.connect();
    await this.restServer.start();
    await this.queue.startWorkers();
  }

  /**
   * Closes the application's interfaces
   */
  async shutdown() {
    this.logger.info("Shutting Dependent Services");
    await this.mongo.close();
    await this.redis.disconnect();
    await this.queue.stopWorkers();
    this.logger.info("Done shutting down dependent services");
    this.restServer.close((err: any) => {
      this.logger.info("Shutting down REST server");
      if (err) {
        this.logger.error("Error while shutting down server", {
          error: err.message,
        });
      }
      console.log("Shutting down REST server");
      process.exit(err ? 1 : 0);
    });
  }
}

export default App;
