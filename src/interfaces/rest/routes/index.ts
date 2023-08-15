import RedisDBManager from "base/database/RedisDBManager";
import CookieSession from "cookie-session";
import cors from "cors";
import express, { Router } from "express";
import helmet from "helmet";
import morgan from "morgan";
import passport from "passport";
import v1Routes from "./v1";
import ResponseManager from "../response/ResponseBuilder";

/**
 * Configures express middlewares
 */
export default ({
  redis,
  config,
  containerMiddleware,
  error404,
  errorHandler,
  Sentry,
}: {
  redis: RedisDBManager;
  config: any;
  containerMiddleware: any;
  error404: any;
  errorHandler: any;
  Sentry: any;
}) => {
  const router = Router();
  const NODE_ENV = config.get("app.env");
  const bodyLimit = config.get("app.bodyLimit");
  const session_key = config.get("app.sessionKey");

  router.use(helmet());
  router.use(
    CookieSession({
      maxAge: 24 * 60 * 60 * 1000,
      keys: [session_key],
    }),
  );
  router.use(passport.initialize());
  router.use(passport.session());
  router.use(morgan(NODE_ENV === "production" ? "combined" : "dev"));
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
  // router.use(redisUseCache);

  router.use(containerMiddleware);
  router.get("/", (req, res) => {
    res.json({ message: "Node_Clean" });
  });
  router.use("/health", (req, res) => {
    return ResponseManager.getResponseHandler(req, res).onSuccess({ message: "Node_Clean" }, "Done");
  });
  router.use("/v1", v1Routes);
  router.use(Sentry.Handlers.errorHandler());
  router.use(error404);
  router.use(errorHandler);

  return router;
};
