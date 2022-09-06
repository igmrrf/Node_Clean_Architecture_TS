import BaseController from "interfaces/http/controllers";
import { pick } from "lodash";

class UserController extends BaseController {
  constructor({ createUser, updateUser, deleteUser, getUser, getUsers, authUser }) {
    super();
    this.create = createUser;
    this.auth = authUser;
    this.update = updateUser;
    this.delete = deleteUser;
    this.getOne = getUser;
    this.get = getUsers;
    this.allowedPayloads = ["eth_address", "username", "email", "discord", "twitter", "type", "nft"];
  }

  async createUser(req, res) {
    const payload = pick(req.body, this.allowedPayloads);
    const response = await this.create.execute(payload);
    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "User added successfully");
  }

  async login(req, res) {
    const payload = pick(req.body, ["eth_address"]);
    const response = await this.auth.execute(payload);
    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "Auth successful!");
  }

  async updateUser(req, res) {
    const { id: _id } = pick(req.params, ["id"]);
    const body = pick(req.body, ["nft", "username", "discord", "twitter", "type", "verified"]);
    const payload = { ...body, _id };
    const response = await this.update.execute(payload);
    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "User udpated successfully");
  }

  async deleteUser(req, res) {
    const { id: _id } = pick(req.params, ["id"]);
    const payload = { _id };
    const response = await this.delete.execute(payload);
    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "User deleted successfully!");
  }

  async getUsers(req, res) {
    const response = await this.get.execute();
    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "User(s) fetched successfully!");
  }

  async getUser(req, res) {
    const { id: _id } = pick(req.params, ["id"]);
    const payload = { _id };
    const response = await this.getOne.execute(payload);
    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "User fetched successfully!");
  }
}

export default UserController;
