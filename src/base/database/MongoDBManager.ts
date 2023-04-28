import logger from "base/logger";
import config from "config";
import { Config } from "convict";
import mongoose, { Connection } from "mongoose";
import { Logger } from "winston";
/**
 * Manages connection to MongoDB
 */

enum configs {
  APP_ENV = "app.env",
}
class MongoDBManager {
  config: Config<unknown>;
  logger: Logger;
  connectionString: string;
  connection: Connection;

  constructor({ config, logger }: { config: Config<unknown>; logger: Logger }) {
    this.config = config;
    this.logger = logger;

    this.connectionString = MongoDBManager.connectionString();
    this.connection = mongoose.connection;
    mongoose.set("strictQuery", true);
    if (this.config.get("app.env" as unknown as undefined) === "development") {
      mongoose.set("debug", true);
    }

    this.connection.on("open", () => this.logger.info("Successfully connected to MongoDB"));
    this.connection.on("disconnected", () => this.logger.info("Disconnected from MongoDB"));
    this.connection.on("error", (error: any) =>
      this.logger.error("Error while connecting to MongoDB", error.message),
    );
  }

  /**
   * Connects to MongoDB
   * @param {number} poolSize - Connection pool size
   * @param {boolean} autoIndex - Use autoIndex
   * @param {number} numOfRetries - Number of connection attempts
   */
  async connect(poolSize = 10, autoIndex = true, numOfRetries = 3) {
    this.logger.info(`Attempting to connect to MongoDB. Retries left: ${numOfRetries}`);
    try {
      await mongoose.connect(this.connectionString, {
        maxPoolSize: poolSize,
        autoIndex,
      });
    } catch (error: any) {
      this.logger.error("Failed to connected to MongoDB", error);
      if (numOfRetries <= 0) {
        this.logger.error("Exhausted max number of retries for connecting to MongoDB");
        process.exit(1);
      }
      setTimeout(() => {
        this.connect(poolSize, autoIndex, numOfRetries - 1);
      }, 1000);
    }
  }

  static connectionString() {
    const user = encodeURIComponent(config.get("db.user"));
    const password = encodeURIComponent(config.get("db.password"));
    const host = config.get("db.host");
    const name = config.get("db.name");
    const auth = config.get("db.auth");

    let connectionString = `mongodb://${host}/${name}`;
    if (auth) {
      connectionString = `mongodb+srv://${user}:${password}@${host}/${name}?retryWrites=true&w=majority`;
    }
    return connectionString;
  }

  static async override(DBName: string): Promise<{ model: any }> {
    const _connections: { [key: string]: any } = {};
    if (_connections[DBName]) {
      return _connections[DBName];
    } else {
      const opt = { dbName: DBName, useNewUrlParser: true, autoIndex: false };

      if (process.env.NODE_ENV !== "development") {
        // Build index on development
        opt.autoIndex = true;
      }

      const mongo = mongoose.createConnection();
      _connections[DBName] = await mongo.openUri(MongoDBManager.connectionString(), opt);
      mongo.on("error", (error: any) => {
        logger.error(error.message);
      });
      mongo.once("open", () => {
        logger.info("MongoDB database connection override successful - ", DBName);
      });
    }

    return _connections[DBName];
  }

  async close() {
    this.logger.info("Closing MongoDB connection...");
    try {
      await mongoose.disconnect();
    } catch (error) {
      this.logger.error("Error while closing MongoDB database", { error });
      process.exit(1);
    }
  }
}

export default MongoDBManager;
