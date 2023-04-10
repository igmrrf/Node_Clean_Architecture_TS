import { Server } from "http";
import { Mongoose } from "mongoose";
import { Logger } from "winston";
/**
 * Manages application interfaces e.g REST server, gRPC server
 */
class App {
  restServer: any;
  logger: Logger;
  db: any;

  constructor({ restServer, logger, db }: { restServer: Server; logger: Logger; db: Mongoose }) {
    this.restServer = restServer;
    this.logger = logger;
    this.db = db;
  }

  /**
   * Starts the application interfaces to begin handling user requests
   */
  async start() {
    await this.db.connect();
    await this.restServer.start();
  }

  /**
   * Closes the application's interfaces
   */
  shutdown() {
    this.restServer.close(async (err: any) => {
      this.logger.info("Shutting down REST server");
      if (err) {
        this.logger.error("Error while shutting down server", {
          error: err.toString(),
        });
      }
      await this.db.close();
      process.exit(err ? 1 : 0);
    });
  }
}

export default App;
