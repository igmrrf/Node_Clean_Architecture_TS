/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/**
 * Automatically loads all models and exports them
 */

import fs from "fs";
import path from "path";
import { Router } from "express";

const router = Router();
fs.readdirSync(__dirname)
  .filter((folder) => folder !== "models.js" && fs.lstatSync(`${__dirname}/${folder}`).isDirectory())
  .forEach((folder) => {
    const newDir = `${__dirname}/${folder}`;
    fs.readdirSync(newDir)
      .filter((file) => file.indexOf("Route.js") > -1)
      .forEach((file) => {
        const endpoint = `/${file.split("Route.js")[0]}`;

        const route = require(path.join(newDir, file)).default;

        router.use(endpoint, route);
      });
  });

export default router;
