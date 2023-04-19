import { RedisCommandArgument } from "@redis/client/dist/lib/commands";
import { Config } from "convict";
import { NextFunction, Request, Response } from "express";
import ResponseManager from "interfaces/rest/response/ResponseBuilder";
import * as redis from "redis";
import { Logger } from "winston";

class RedisDBManager {
  config!: Config<unknown>;
  logger: Logger;
  client: redis.RedisClientType;
  appName: any;
  cacheExpiry: any;
  key = "";

  constructor({ config, logger }: { config: Config<unknown>; logger: Logger }) {
    this.config = config;
    this.logger = logger;
    // const redisUrl = config.get("redis.url");
    // this.client = redis.createClient({ url: redisUrl });
    this.client = redis.createClient();
    this.appName = config.get("app.serviceName");
    this.cacheExpiry = config.get("app.cacheExpiry");

    this.client.on("error", (err: any) => this.logger.error("Redis Client Error: ", err));
    this.client.on("connect", () => this.logger.info("Connecting to Redis"));
    this.client.on("ready", () => this.logger.info("Successfully connected to Redis"));

    this.connect();
  }

  async connect(numOfRetries = 3) {
    try {
      await this.client.connect();
    } catch (error: any) {
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
    } catch (error: any) {
      this.logger.error("Error while disconnecting Redis Database", { error });
      process.exit(1);
    }
  }

  async useCache(req: Request, res: Response, next: NextFunction) {
    if (req.method === "GET") {
      // Create Cache Key
      const key = [];
      key.push(req.url);
      key.push(req.ip);
      key.push(req.cookies);
      key.push(req.get("Content-Type"));
      key.push(req.get("user-agent"));
      key.push(req.get("x-jwt"));
      key.push(req.get("Authorization"));

      this.key = key.toString();

      // Set cacheExpiry
      res.set({ "Cache-Control": `private, max-age=${this.cacheExpiry}` });

      if (this.key) {
        const cacheResponse = await this.client.get(this.key);

        if (cacheResponse) {
          const response = JSON.parse(cacheResponse);
          return ResponseManager.getResponseHandler(req, res).onSuccess(response);
        }
      }
    }

    return next();
  }

  cacheSetter(key: RedisCommandArgument, value: RedisCommandArgument) {
    this.client.set(key, value);
  }

  get cacheKey() {
    return this.key;
  }

  setCacheKey(request: Request) {
    const key = [];
    key.push(request.url);
    key.push(request.ip);
    key.push(request.cookies);
    key.push(request.get("Content-Type"));
    key.push(request.get("user-agent"));
    key.push(request.get("x-jwt"));
    key.push(request.get("Authorization"));

    this.key = key.toString();
  }
}

export default RedisDBManager;
