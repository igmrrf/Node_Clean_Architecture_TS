/**
 * Automatically loads all models and exports them
 */

import fs from "fs";
import path from "path";

const models: { [key: string]: any } = {};

fs.readdirSync(__dirname)
  .filter((folder) => folder !== "models.ts" && fs.lstatSync(`${__dirname}/${folder}`).isDirectory())
  .forEach((folder) => {
    const newDir = `${__dirname}/${folder}`;
    fs.readdirSync(newDir)
      .filter((file) => file.indexOf("Model.ts") > -1)
      .forEach(async (file) => {
        // eslint-disable-next-line
        const full = require(path.join(newDir, file));
        const model = full.default;

        // const modelImport = await import(path.join(newDir, file));
        // const model = modelImport.default;

        models[model.modelName] = full;
      });
  });

export default models;
