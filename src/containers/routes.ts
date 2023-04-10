/**
 * Automatically loads all models and exports them
 */

import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();
fs.readdirSync(__dirname)
  .filter((folder) => folder !== "models.ts" && fs.lstatSync(`${__dirname}/${folder}`).isDirectory())
  .forEach((folder) => {
    const newDir = `${__dirname}/${folder}`;
    fs.readdirSync(newDir)
      .filter((file) => file.indexOf("Route.ts") > -1)
      .forEach(async (file) => {
        const endpoint = `/${file.split("Route.ts")[0]}`;
        const typeUseCase = path.join(newDir, file);

        // eslint-disable-next-line
        const route = require(path.join(newDir, file)).default;
        // const layout = await import(path.join(newDir, file));
        // const route = layout.default;

        router.use(endpoint, route);
      });
  });

export default router;
