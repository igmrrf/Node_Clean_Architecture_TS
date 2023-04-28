import { Request, Response } from "express";
import BaseController from "interfaces/rest/controllers";
import { pick } from "lodash";

class UserController extends BaseController {
  allowedPayloads: string[];
  auth: any;
  remove: any;
  create: any;
  update: any;
  getOne: any;
  getAll: any;
  constructor({
    createUser,
    updateUser,
    deleteUser,
    getUser,
    getUsers,
    authUser,
  }: {
    createUser: any;
    updateUser: any;
    deleteUser: any;
    getUser: any;
    getUsers: any;
    authUser: any;
  }) {
    super();
    this.create = createUser;
    this.auth = authUser;
    this.update = updateUser;
    this.remove = deleteUser;
    this.getOne = getUser;
    this.getAll = getUsers;
    this.allowedPayloads = ["username", "email", "discord", "twitter", "type"];
  }

  async createUser(req: Request, res: Response) {
    const { tenant } = pick(req.query, ["tenant"]);
    const payload = pick(req.body, this.allowedPayloads);
    const response = await this.create.execute({ ...payload, tenant });
    return this.responseBuilder.getResponseHandler(req, res).onSuccess(response, "User added successfully");
  }

  async login(req: Request, res: Response) {
    const payload = pick(req.body, ["username", "password"]);
    const response = await this.auth.execute(payload);
    return this.responseBuilder.getResponseHandler(req, res).onSuccess(response, "Auth successful!");
  }

  async updateUser(req: Request, res: Response) {
    const { id: _id } = pick(req.params, ["id"]);
    const body = pick(req.body, ["username", "discord", "twitter", "type", "verified"]);
    const payload = { ...body, _id };
    const response = await this.update.execute(payload);
    return this.responseBuilder.getResponseHandler(req, res).onSuccess(response, "User updated successfully");
  }

  async deleteUser(req: Request, res: Response) {
    const { id: _id } = pick(req.params, ["id"]);
    const payload = { _id };
    const response = await this.remove.execute(payload);
    return this.responseBuilder.getResponseHandler(req, res).onSuccess(response, "User deleted successfully!");
  }

  async getUsers(req: Request, res: Response) {
    const { tenant } = pick(req.query, ["tenant"]);
    const payload = { tenant };
    const response = await this.getAll.execute(payload);
    return this.responseBuilder.getResponseHandler(req, res).onSuccess(response, "User(s) fetched successfully!");
  }

  async getUser(req: Request, res: Response) {
    const { id: _id } = pick(req.params, ["id"]);
    const payload = { _id };
    const response = await this.getOne.execute(payload);
    return this.responseBuilder.getResponseHandler(req, res).onSuccess(response, "User fetched successfully!");
  }
}

export default UserController;
