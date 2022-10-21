import BaseController from "interfaces/rest/controllers";
import { pick } from "lodash";

class WaitListController extends BaseController {
  constructor({ createWaitList, updateWaitList, deleteWaitList, getWaitLists, getWaitList }) {
    super();
    this.create = createWaitList;
    this.update = updateWaitList;
    this.delete = deleteWaitList;
    this.get = getWaitLists;
    this.getOne = getWaitList;
    this.allowPayload = ["email", "discord", "twitter", "username"];
  }

  async createWaitList(req, res) {
    const payload = pick(req.body, this.allowPayload);
    const response = await this.create.execute(payload);
    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "WaitList created successfully !");
  }

  async updateWaitList(req, res) {
    const { id: _id } = pick(req.params, ["id"]);
    const body = pick(req.body, this.allowPayload);
    const payload = { ...body, _id };
    const response = await this.update.execute(payload);
    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "WaitList updated successfully!");
  }

  async deleteWaitList(req, res) {
    const { id: _id } = pick(req.params, ["id"]);
    const payload = { _id };
    const response = await this.delete.execute(payload);
    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "WaitList deleted successfully!");
  }

  async getWaitLists(req, res) {
    const response = await this.get.execute();
    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "WaitLists fetched successfully!");
  }

  async getWaitList(req, res) {
    const { id: _id } = pick(req.params, ["id"]);
    const payload = { _id };
    const response = await this.getOne.execute(payload);
    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "WaitList fetched successfully!");
  }
}

export default WaitListController;
