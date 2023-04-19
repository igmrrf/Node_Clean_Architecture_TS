/**
 * Automatically loads all configurations and exports them
 */
import convict from "convict";
import env from "dotenv-extended";
import fs from "fs";
import path from "path";

env.load({
  errorOnMissing: process.env.NODE_ENV === "production",
  path: ".env",
  errorOnExtra: false,
  includeProcessEnv: true,
});

let serviceConfig = {};

fs.readdirSync(__dirname)
  .filter((file) => file !== path.basename(__filename) && path.extname(file) === ".ts")
  .forEach((file) => {
    // eslint-disable-next-line
    const config = require(path.join(__dirname, file));
    serviceConfig = { ...serviceConfig, ...config };
    serviceConfig = Object.assign(serviceConfig, config);
  });

const config = convict<unknown>(serviceConfig, {});
config.validate({ allowed: "strict" });

export default config;
