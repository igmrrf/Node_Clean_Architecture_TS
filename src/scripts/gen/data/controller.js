module.exports = (
  name,
) => `import BaseController from "interfaces/http/controllers";
import { pick } from "lodash";

class ${name}Controller extends BaseController {
  constructor({ create${name}, update${name}, delete${name}, get${name}, get${name}s }) {
    super();
    this.create = create${name};
    this.update = update${name};
    this.delete = delete${name};
    this.getOne = get${name};
    this.get = get${name}s;
    this.allowedPayloads = ["value", "anotherValue"]
  }

  async create${name}(req, res) {
    const payload = pick(req.body, this.allowedPayloads);
    const response = await this.create.execute(payload);
    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "${name} added successfully");
  }

  async update${name}(req, res) {
    const { id: _id } = pick(req.params, ["id"]);
    const body = pick(req.body, ["", ""]);
    const payload = { ...body, _id };
    const response = await this.update.execute(payload);
    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "${name} udpated successfully");
  }

  async delete${name}(req, res) {
    const { id: _id } = pick(req.params, ["id"]);
    const payload = { _id };
    const response = await this.delete.execute(payload);
    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "${name} deleted successfully!");
  }

  async get${name}s(req, res) {
    const response = await this.get.execute();
    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "${name}(s) fetched successfully!");
  }

  async get${name}(req, res) {
    const { id: _id } = pick(req.params, ["id"]);
    const payload = { _id };
    const response = await this.getOne.execute(payload);
    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "${name} fetched successfully!");
  }
}

export default ${name}Controller;
`;
