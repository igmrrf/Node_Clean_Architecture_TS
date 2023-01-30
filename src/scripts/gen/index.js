const fs = require("fs");
const path = require("path");

const folder = process.argv[2] || "";
const CFolder = process.argv[3] || "";
const routeContent = require("./data/route")(CFolder);
const repositoryContent = require("./data/repository")(CFolder);
const validationContent = require("./data/validation")(CFolder);
const entityContent = require("./data/entity")(CFolder);
const modelContent = require("./data/model")(CFolder);
const controllerContent = require("./data/controller")(CFolder);
const specContent = require("./data/spec")(CFolder);
const repositorySpecContent = require("./data/repository.spec")(CFolder);
const mockContent = require("./data/mockdata")(CFolder);
const createContent = require("./data/create")(CFolder);
const updateContent = require("./data/update")(CFolder);
const deleteContent = require("./data/delete")(CFolder);
const getOneContent = require("./data/getone")(CFolder);
const getContent = require("./data/getall")(CFolder);

function writeIntoFile(dir) {
  if (!dir) dir = path.join(process.cwd(), `src/containers/${folder}`);
  fs.readdirSync(dir)
    .filter((file) => file !== "index.js")
    .forEach((file) => {
      let content = null;
      if (fs.lstatSync(`${dir}/${file}`).isDirectory()) return writeIntoFile(`${dir}/${file}`);
      file = path.join(dir, file);
      if (file.includes(`MOCK_DATA.js`)) content = mockContent;
      else if (file.includes(`${CFolder}.spec.js`)) content = specContent;
      else if (file.includes(`${CFolder}Repository.spec.js`)) content = repositorySpecContent;
      else if (file.includes("Controller.js")) content = controllerContent;
      else if (file.includes("Entity.js")) content = entityContent;
      else if (file.includes("Model.js")) content = modelContent;
      else if (file.includes("Repository.js")) content = repositoryContent;
      else if (file.includes("Route.js")) content = routeContent;
      else if (file.includes("Validation.js")) content = validationContent;

      fs.writeFile(file, content, (err) => {
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
      let content = null;
      file = path.join(dir, file);
      if (file.includes(`Create${CFolder}.js`)) content = createContent;
      else if (file.includes(`Update${CFolder}.js`)) content = updateContent;
      else if (file.includes(`Delete${CFolder}.js`)) content = deleteContent;
      else if (file.includes(`Get${CFolder}.js`)) content = getOneContent;
      else if (file.includes(`Get${CFolder}s.js`)) content = getContent;
      fs.writeFile(file, content, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
    });
}

writeIntoFile();
