/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/**
 * Automatically loads all models and exports them
 */

import fs from "fs";
import path from "path";

const models = {};

fs.readdirSync(__dirname)
  .filter((folder) => folder !== "models.js" && fs.lstatSync(`${__dirname}/${folder}`).isDirectory())
  .forEach((folder) => {
    const newDir = `${__dirname}/${folder}`;
    fs.readdirSync(newDir)
      .filter((file) => file.indexOf("Model.js") > -1)
      .forEach((file) => {
        const model = require(path.join(newDir, file)).default;
        models[model.modelName] = model;
        console.log({ model, models, type1: typeof model, type2: typeof models });
      });
  });

export default models;
