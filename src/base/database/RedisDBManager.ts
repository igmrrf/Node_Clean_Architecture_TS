import config from "config";
import container from "container";
import { NextFunction, Request, Response } from "express";
import { ConvictConfig } from "helpers/types";
import ResponseManager from "interfaces/rest/response/ResponseBuilder";
import Redis, { RedisValue } from "ioredis";
import { Logger } from "winston";

class RedisDBManager {
  config!: ConvictConfig;
  logger: Logger;
  appName: string;
  cacheExpiry: number;
  key: string;
  client: Redis;

  constructor({ config, logger }: { config: ConvictConfig; logger: Logger }) {
    this.config = config;
    this.logger = logger;
    this.key = "fish";
    // const redisUrl = config.get("redis.url");
    // this.client = new Redis({ url: redisUrl });
    // Todo: Solve the typescript error on config
    this.appName = config.get("app.serviceName");
    this.cacheExpiry = config.get("app.cacheExpiry");
    this.client = this.connect();
  }

  connect() {
    if (!this.client) {
      const redisHost = this.config.get("redis.host");
      const redisPort = this.config.get("redis.port");
      const redisPassword = this.config.get("redis.password");
      const redisUser = this.config.get("redis.user");
      const redisUrl = this.config.get("redis.url");
      const redisAuth = this.config.get("redis.auth");
      if (redisUrl) {
        console.log({ redisUrl });
        this.client = new Redis(redisUrl);
      } else {
        if (redisAuth) {
          this.client = new Redis({
            port: redisPort,
            host: redisHost,
            username: redisUser,
            password: redisPassword,
          });
        } else {
          this.client = new Redis({
            port: redisPort,
            host: redisHost,
          });
        }
      }
      this.client.on("connect", () => this.logger.info("Attempting to Connect to Redis Again"));
      this.client.on("error", (err) => this.logger.error("Redis Client Error: ", err));
      this.client.on("ready", () => this.logger.info("Successfully connected to Redis"));
      return this.client;
    } else {
      return this.client;
    }
  }

  disconnect() {
    this.logger.info("Disconnecting REDIS...");
    try {
      this.client.disconnect();
    } catch (error) {
      this.logger.error("Error while disconnecting Redis Database", { error });
      process.exit(1);
    }
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

    return key.toString();
  }

  async useCache(request: Request, res: Response, next: NextFunction) {
    try {
      console.log({ here: this });
      if (request.method === "GET") {
        let key: string | any[] = [];
        key.push(request.url);
        key.push(request.ip);
        key.push(request.cookies);
        key.push(request.get("Content-Type"));
        key.push(request.get("user-agent"));
        key.push(request.get("x-jwt"));
        key.push(request.get("Authorization"));

        key = key.toString();

        // Set cacheExpiry
        console.log({ key, key2: this.key, thisl: this });
        res.set({ "Cache-Control": `private, max-age=${this.cacheExpiry}` });

        if (this.key) {
          const cacheResponse: string | null = await this.client.get(this.key);

          if (cacheResponse) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const response: object = JSON.parse(cacheResponse);
            return ResponseManager.getResponseHandler(request, res).onSuccess(response);
          }
        } else {
          console.log("No Key");
        }
      }
    } catch (error) {
      console.log("Error in Redis Cache", { error });
      next(error);
    }

    return next();
  }

  async cacheSetter(req: Request, value: RedisValue) {
    console.log("here");
    const key = this.setCacheKey(req);
    await this.client.set(key, value);
    await this.client.expire(key, this.cacheExpiry);
  }

  get cacheKey() {
    return this.key;
  }
}

export const redisUseCache = async (request: Request, res: Response, next: NextFunction) => {
  try {
    const Redis = container.resolve<RedisDBManager>("redis");
    if (request.method === "GET") {
      let key: string | any[] = [];
      key.push(request.url);
      key.push(request.ip);
      key.push(request.cookies);
      key.push(request.get("Content-Type"));
      key.push(request.get("user-agent"));
      key.push(request.get("x-jwt"));
      key.push(request.get("Authorization"));

      key = key.toString();
      console.log({ key });

      // Set cacheExpiry
      const cacheExpiry = config.get("app.cacheExpiry");
      res.set({ "Cache-Control": `private, max-age=${cacheExpiry}` });

      if (key) {
        const cacheResponse: string | null = await Redis.client.get(key);
        console.log({ cacheResponse });
        if (cacheResponse) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const response: object = JSON.parse(cacheResponse);
          console.log({ response });
          return ResponseManager.getResponseHandler(request, res).onSuccess(response);
        }
      } else {
        console.log("No Key");
      }
    }
  } catch (error) {
    console.log("Error in Redis Cache", { error });
    next(error);
  }

  return next();
};
export default RedisDBManager;
