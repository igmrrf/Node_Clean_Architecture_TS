const ControllerGenerator = (name: string) => `import { Request, Response } from "express";
import BaseController from "interfaces/rest/controllers";
import { pick } from "lodash";

class ${name}Controller extends BaseController {
  allowedPayloads: string[];
  remove: any;
  create: any;
  update: any;
  getOne: any;
  getAll: any;

  constructor({ 
    create${name}, 
    update${name}, 
    delete${name}, 
    get${name}, 
    get${name}s 
  }: { 
    create${name}: any; 
    update${name}: any; 
    delete${name}: any; 
    get${name}: any; 
    get${name}s: any; 
  }) {
    super();
    this.create = create${name};
    this.update = update${name};
    this.remove = delete${name};
    this.getOne = get${name};
    this.getAll = get${name}s;
    this.allowedPayloads = ["value", "anotherValue"]
  }

  async create${name}(req: Request, res: Response) {
    const payload = pick(req.body, this.allowedPayloads);
    const response = await this.create.execute(payload);
    return this.responseBuilder.getResponseHandler(req, res).onSuccess(response, "${name} added successfully");
  }

  async update${name}(req: Request, res: Response) {
    const { id: _id } = pick(req.params, ["id"]);
    const body = pick(req.body, ["", ""]);
    const payload = { ...body, _id };
    const response = await this.update.execute(payload);
    return this.responseBuilder.getResponseHandler(req, res).onSuccess(response, "${name} udpated successfully");
  }

  async delete${name}(req: Request, res: Response) {
    const { id: _id } = pick(req.params, ["id"]);
    const payload = { _id };
    const response = await this.remove.execute(payload);
    return this.responseBuilder.getResponseHandler(req, res).onSuccess(response, "${name} deleted successfully!");
  }

  async get${name}s(req: Request, res: Response) {
    const response = await this.getAll.execute();
    return this.responseBuilder.getResponseHandler(req, res).onSuccess(response, "${name}(s) fetched successfully!");
  }

  async get${name}(req: Request, res: Response) {
    const { id: _id } = pick(req.params, ["id"]);
    const payload = { _id };
    const response = await this.getOne.execute(payload);
    return this.responseBuilder.getResponseHandler(req, res).onSuccess(response, "${name} fetched successfully!");
  }
}

export default ${name}Controller;
`;

export default ControllerGenerator;
