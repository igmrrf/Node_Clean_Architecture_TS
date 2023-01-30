// import CacheMan from "cacheman";
// import EngineRedis from "cacheman-redis";
import errorHandler from "interfaces/rest/middlewares/errorHandler";
import error404 from "interfaces/rest/middlewares/notFoundHandler";
import cors from "cors";
import express, { Router } from "express";
import morgan from "morgan";
import v1Routes from "./v1";

/**
 * Configures express middlewares
 */
export default ({ config, containerMiddleware }: { config: any; containerMiddleware: any }) => {
  const router = Router();
  router.use(require("helmet")());
  const NODE_ENV = config.get("app.env");
  router.use(morgan(NODE_ENV === "production" ? "combined" : "dev"));

  const bodyLimit = config.get("app.bodyLimit");
  // const appName = config.get("app.serviceName");
  // const cacheExpiry = config.get("app.cacheExpiry");

  // const caching = async (req, res, next) => {
  //   // Set up Cache Engine
  //   const cache = new EngineRedis();
  //   const apiCache = new CacheMan(appName, { engine: cache, ttl: cacheExpiry });
  //   req.cache = apiCache;

  //   res.set({ "Cache-Control": `private, max-age=${cacheExpiry}` });

  //   // Create Cache Key
  //   const key = [];
  //   key.push(req.url);
  //   key.push(req.ip);
  //   key.push(req.cookies);
  //   key.push(req.get("Content-Type"));

  //   req.cacheKey = key;

  //   if (req.method === "GET" && req.cacheKey) {
  //     const cacheResponse = await req.cache.get(req.cacheKey);

  //     if (cacheResponse) {
  //       return res.ok(cacheResponse, true);
  //     }
  //   }
  //   return next();
  // };

  router.use(express.urlencoded({ extended: false, limit: bodyLimit }));
  router.use(express.json({ limit: bodyLimit }));
  router.use(express.raw({ limit: bodyLimit }));
  router.use(express.text({ limit: bodyLimit }));

  // Setup CORS
  const allowedOrigins = config.get("app.allowedOrigins");
  router.use(
    cors({
      origin: (origin, cb) => {
        if (allowedOrigins.trim() === "*") {
          cb(null, true);
        } else {
          const origins = allowedOrigins.split(",");
          if (origins.indexOf(origin) !== -1 || !origin) {
            cb(null, true);
          } else {
            cb(new Error(`Origin('${origin}') not allowed`), false);
          }
        }
      },
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    }),
  );

  // Setup Caching
  // router.use(caching());

  // https://www.npmjs.com/package/awilix-express
  router.use(containerMiddleware);

  router.get("/", (req, res) => res.json({ message: "Node_Clean" }));

  router.use("/v1", v1Routes);

  router.use(error404);

  router.use(errorHandler);

  return router;
};
