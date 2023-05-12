import { NextFunction, Request, Response } from "express";
import { ConvictConfig } from "helpers/types";
import ResponseManager from "interfaces/rest/response/ResponseBuilder";
import Redis, { RedisKey, RedisValue } from "ioredis";
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
    this.key = "";
    // const redisUrl = config.get("redis.url");
    // this.client = new Redis({ url: redisUrl });
    // Todo: Solve the typescript error on config
    const redisHost = config.get("redis.host");
    const redisPort = config.get("redis.port");
    this.appName = config.get("app.serviceName");
    this.cacheExpiry = config.get("app.cacheExpiry");
    this.client = new Redis({ port: redisPort, host: redisHost });
    this.client.on("error", (err) => this.logger.error("Redis Client Error: ", err));
    this.client.on("connect", () => this.logger.info("Attempting to Connect to Redis"));
    this.client.on("ready", () => this.logger.info("Successfully connected to Redis"));
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

  async useCache(req: Request, res: Response, next: NextFunction) {
    if (req.method === "GET") {
      this.setCacheKey(req);

      // Set cacheExpiry
      res.set({ "Cache-Control": `private, max-age=${this.cacheExpiry}` });

      if (this.key) {
        const cacheResponse: string | null = await this.client.get(this.key);

        if (cacheResponse) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const response: object = JSON.parse(cacheResponse);
          return ResponseManager.getResponseHandler(req, res).onSuccess(response);
        }
      }
    }

    return next();
  }

  async cacheSetter(key: RedisKey, value: RedisValue) {
    await this.client.set(key, value);
    await this.client.expire(key, this.cacheExpiry);
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
