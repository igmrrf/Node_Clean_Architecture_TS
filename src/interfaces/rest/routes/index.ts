import cors from "cors";
import express, { Router } from "express";
import helmet from "helmet";
import morgan from "morgan";
import v1Routes from "./v1";

/**
 * Configures express middlewares
 */
export default ({
  cache,
  config,
  containerMiddleware,
  error404,
  errorHandler,
  Sentry,
}: {
  cache: any;
  config: any;
  containerMiddleware: any;
  error404: any;
  errorHandler: any;
  Sentry: any;
}) => {
  const router = Router();
  router.use(helmet());
  const NODE_ENV = config.get("app.env");
  router.use(morgan(NODE_ENV === "production" ? "combined" : "dev"));

  const bodyLimit = config.get("app.bodyLimit");

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
  // router.use(cache.useCache);

  router.use(containerMiddleware);

  router.get("/", (req, res) => {
    res.json({ message: "Node_Clean" });
  });

  router.use("/v1", v1Routes);
  router.use(Sentry.Handlers.errorHandler());

  router.use(error404);

  router.use(errorHandler);

  return router;
};
