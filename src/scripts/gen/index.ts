import fs from "fs";
import path from "path";
import ControllerContentFunction from "./data/controller";
import CreateContentFunction from "./data/create";
import DeleteContentFunction from "./data/delete";
import EntityContentFunction from "./data/entity";
import GetContentFunction from "./data/getall";
import GetOneContentFunction from "./data/getone";
import MockContentFunction from "./data/mockdata";
import ModelContentFunction from "./data/model";
import RepositoryContentFunction from "./data/repository";
import RepositorySpecContentFunction from "./data/repository.spec";
import RouteContentFunction from "./data/route";
import SpecContentFunction from "./data/spec";
import TypesGeneratorFunction from "./data/types";
import UpdateContentFunction from "./data/update";
import ValidationContentFunction from "./data/validation";

const folder = process.argv[2] || "";
const CFolder = process.argv[3] || "";
const routeContent = RouteContentFunction(CFolder);
const repositoryContent = RepositoryContentFunction(CFolder);
const validationContent = ValidationContentFunction(CFolder);
const entityContent = EntityContentFunction(CFolder);
const modelContent = ModelContentFunction(CFolder);
const controllerContent = ControllerContentFunction(CFolder);
const specContent = SpecContentFunction(CFolder);
const repositorySpecContent = RepositorySpecContentFunction(CFolder);
const mockContent = MockContentFunction(CFolder);
const createContent = CreateContentFunction(CFolder);
const updateContent = UpdateContentFunction(CFolder);
const deleteContent = DeleteContentFunction(CFolder);
const getOneContent = GetOneContentFunction(CFolder);
const getContent = GetContentFunction(CFolder);
const typesContent = TypesGeneratorFunction(CFolder);

function writeIntoFile(dir: string = path.join(process.cwd(), `src/containers/${folder}`)) {
  fs.readdirSync(dir)
    .filter((file: string) => file !== "index.ts")
    .forEach((file: string) => {
      let content = "";
      if (fs.lstatSync(`${dir}/${file}`).isDirectory()) return writeIntoFile(`${dir}/${file}`);
      file = path.join(dir, file);
      if (file.includes(`MOCK_DATA.ts`)) content = mockContent;
      else if (file.includes(`${CFolder}.spec.ts`)) content = specContent;
      else if (file.includes(`${CFolder}Repository.spec.ts`)) content = repositorySpecContent;
      else if (file.includes("Controller.ts")) content = controllerContent;
      else if (file.includes("Entity.ts")) content = entityContent;
      else if (file.includes("Model.ts")) content = modelContent;
      else if (file.includes("Repository.ts")) content = repositoryContent;
      else if (file.includes("Route.ts")) content = routeContent;
      else if (file.includes("Validation.ts")) content = validationContent;
      else if (file.includes("Types.ts")) content = typesContent;

      fs.writeFile(file, content, (err: any) => {
        if (err) {
          console.error(err);
          return;
        }
      });
    });

  dir = path.join(process.cwd(), `src/app/${folder}`);

  fs.readdirSync(dir)
    .filter((file: string) => file !== "index.ts")
    .forEach((file: string) => {
      let content = "";
      file = path.join(dir, file);
      if (file.includes(`Create${CFolder}.ts`)) content = createContent;
      else if (file.includes(`Update${CFolder}.ts`)) content = updateContent;
      else if (file.includes(`Delete${CFolder}.ts`)) content = deleteContent;
      else if (file.includes(`Get${CFolder}.ts`)) content = getOneContent;
      else if (file.includes(`Get${CFolder}s.ts`)) content = getContent;
      fs.writeFile(file, content, (err: any) => {
        if (err) {
          console.error(err);
          return;
        }
      });
    });
}

writeIntoFile();
