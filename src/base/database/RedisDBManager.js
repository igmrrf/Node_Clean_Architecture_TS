import redis from "redis";

class RedisDBManager {
  constructor({ config, logger }) {
    this.config = config;
    this.logger = logger;
    const redisUrl = config.get("app.redisUrl");
    this.client = redis.createClient({ url: redisUrl });
    this.client.on("error", () => this.logger.error("Error while connecting to Redis"));
  }

  async connect(numOfRetries = 3) {
    try {
      await this.client.connect();
    } catch (error) {
      this.logger.error("Failed to connect to Redis", error);

      if (numOfRetries <= 0) {
        this.logger.error("Exhausted max number of retires for connecting Redis");
        process.exit(1);
      }
      setTimeout(() => {
        this.connect(numOfRetries - 1);
      }, 1000);
    }
  }

  async disconnect() {
    this.logger.info("Disconnecting database connection...");
    try {
      await this.client.quit();
    } catch (error) {
      this.logger.error("Error while disconnecting Redis Database", { error });
      process.exit(1);
    }
  }
}

export default RedisDBManager;
