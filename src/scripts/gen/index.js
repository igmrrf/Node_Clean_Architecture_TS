const fs = require("fs");
const readline = require("readline");
const path = require("path");
const { writeFile } = require("fs/promises");

const folder = process.argv[2] || "";
const Cfolder = process.argv[3] || "";
const routeContent = require("./data/route")(Cfolder);
const repositoryContent = require("./data/repository")(Cfolder);
const validationContent = require("./data/validation")(Cfolder);
const entityContent = require("./data/entity")(Cfolder);
const modelContent = require("./data/model")(Cfolder);
const controllerContent = require("./data/controller")(Cfolder);
const specContent = require("./data/spec")(Cfolder);
const repositorySpecContent = require("./data/repository.spec")(Cfolder);
const mockContent = require("./data/mockdata")(Cfolder);
const createContent = require("./data/create")(Cfolder);
const updateContent = require("./data/update")(Cfolder);
const deleteContent = require("./data/delete")(Cfolder);
const getOneContent = require("./data/getone")(Cfolder);
const getContent = require("./data/getall")(Cfolder);

function writeIntoFile(dir) {
  if (!dir) dir = path.join(process.cwd(), `src/containers/${folder}`);

  fs.readdirSync(dir)
    .filter((file) => file !== "index.js")
    .forEach((file) => {
      if (fs.lstatSync(`${dir}/${file}`).isDirectory())
        return writeIntoFile(`${dir}/${file}`);
      file = path.join(dir, file);

      if (file.includes(`MOCK_DATA.js`))
        fs.writeFile(file, mockContent, (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
      if (file.includes(`${Cfolder}.spec.js`))
        fs.writeFile(file, specContent, (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
      if (file.includes(`${Cfolder}Repository.spec.js`))
        fs.writeFile(file, repositorySpecContent, (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
      if (file.includes("Controller.js"))
        fs.writeFile(file, controllerContent, (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
      if (file.includes("Entity.js"))
        fs.writeFile(file, entityContent, (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
      if (file.includes("Model.js"))
        fs.writeFile(file, modelContent, (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
      if (file.includes("Repository.js"))
        fs.writeFile(file, repositoryContent, (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
      if (file.includes("Route.js"))
        fs.writeFile(file, routeContent, (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
      if (file.includes("Validation.js"))
        fs.writeFile(file, validationContent, (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
    });

  dir = path.join(process.cwd(), `src/app/${folder}`);

  fs.readdirSync(dir)
    .filter((file) => file !== "index.js")
    .forEach((file) => {
      file = path.join(dir, file);

      if (file.includes(`Create${Cfolder}.js`))
        fs.writeFile(file, createContent, (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
      if (file.includes(`Update${Cfolder}.js`))
        fs.writeFile(file, updateContent, (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
      if (file.includes(`Delete${Cfolder}.js`))
        fs.writeFile(file, deleteContent, (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
      if (file.includes(`Get${Cfolder}.js`))
        fs.writeFile(file, getOneContent, (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
      if (file.includes(`Get${Cfolder}s.js`))
        fs.writeFile(file, getContent, (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
    });
}

writeIntoFile();
