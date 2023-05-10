import { Config } from "convict";
import { NextFunction, Request, Response } from "express";
import ResponseManager from "interfaces/rest/response/ResponseBuilder";
import Redis, { RedisKey, RedisValue } from "ioredis";
import { Logger } from "winston";

class RedisDBManager {
  config!: Config<{ [key: string]: string | number | object }>;
  logger: Logger;
  appName: any;
  cacheExpiry: any;
  key = "";
  client: Redis;

  constructor({
    config,
    logger,
  }: {
    config: Config<{ [key: string]: string | number | object }>;
    logger: Logger;
  }) {
    this.config = config;
    this.logger = logger;
    // const redisUrl = config.get("redis.url");
    // this.client = new Redis({ url: redisUrl });
    // Todo: Solve the typescript error on config
    this.appName = config.get("app.serviceName");
    this.cacheExpiry = config.get("app.cacheExpiry");
    this.client = new Redis();
    this.client.on("error", (err: any) => this.logger.error("Redis Client Error: ", err));
    this.client.on("connect", () => this.logger.info("Attempting to Connect to Redis"));
    this.client.on("ready", () => this.logger.info("Successfully connected to Redis"));
  }

  async disconnect() {
    this.logger.info("Disconnecting REDIS...");
    try {
      await this.client.disconnect();
    } catch (error: any) {
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
        const cacheResponse = await this.client.get(this.key);

        if (cacheResponse) {
          const response = JSON.parse(cacheResponse);
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
