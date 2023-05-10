// Feel free to implement a custom logger that fulfils your need e.g EFK stack, ELK
/**
 * @module lib/logger
 * @description Configures a custom logger for logging errors, and results of certain operations.
 */

import config from "config";
import { format, default as winston } from "winston";
import { Loggly } from "winston-loggly-bulk";

const token = config.get("loggly.token");
const tags = config.get("loggly.tags");
const subdomain = config.get("loggly.subdomain");

const logger = winston.createLogger({
  level: "info",
  transports: [
    new Loggly({ token, tags, subdomain, json: true }),
    new winston.transports.Console({
      format: format.combine(
        winston.format.colorize(),
        format.timestamp({
          format: "YYYY-MM-DD HH:mm:ss",
        }),
        format.simple(),
      ),
    }),
  ],
  // Stores all uncaught exceptions
  exceptionHandlers: [
    new winston.transports.Console({
      format: format.combine(
        winston.format.colorize(),
        format.timestamp({
          format: "YYYY-MM-DD HH:mm:ss",
        }),
        format.simple(),
      ),
    }),
  ],
});

export default logger;
