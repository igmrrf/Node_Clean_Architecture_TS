/**
 * Automatically loads all configurations and exports them
 */
import fs from "fs";
import path from "path";
import env from "dotenv-extended";
import convict from "convict";

env.load({
  errorOnMissing: process.env.NODE_ENV === "production",
  path: ".env",
  errorOnExtra: false,
  includeProcessEnv: true,
});

let serviceConfig = {};

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file !== path.basename(__filename) && path.extname(file) === ".js",
  )
  .forEach((file) => {
    // eslint-disable-next-line
    const config = require(path.join(__dirname, file));
    serviceConfig = { ...serviceConfig, ...config };
    serviceConfig = Object.assign(serviceConfig, config);
  });

const config = convict(serviceConfig);
config.validate({ allowed: "strict" });

export default config;
