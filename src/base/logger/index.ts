// Feel free to implement a custom logger that fulfils your need e.g EFK stack, ELK
/**
 * @module lib/logger
 * @description Configures a custom logger for logging errors, and results of certain operations.
 */

import config from "config";
import { format, default as winston } from "winston";
import { Loggly } from "winston-loggly-bulk";
import { ConsoleTransportInstance } from "winston/lib/winston/transports";

const token = config.get("loggly.token");
const tags = config.get("loggly.tags");
const subdomain = config.get("loggly.subdomain");
const node_env = config.get("app.env");

const transports: (ConsoleTransportInstance | Loggly)[] = [
  new winston.transports.Console({
    format: format.combine(
      winston.format.colorize(),
      format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      format.simple(),
    ),
  }),
];

if (node_env === "production") {
  transports.unshift(new Loggly({ token, tags, subdomain, json: true }));
}

const logger = winston.createLogger({
  level: "info",
  transports,
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
