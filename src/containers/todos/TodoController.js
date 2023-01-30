import BaseController from "interfaces/rest/controllers";
import { pick } from "lodash";

class TodoController extends BaseController {
  constructor({ createTodo, updateTodo, deleteTodo, getTodo, getTodos }) {
    super();
    this.create = createTodo;
    this.update = updateTodo;
    this.delete = deleteTodo;
    this.getOne = getTodo;
    this.get = getTodos;
    this.allowedPayloads = ["value", "anotherValue"];
  }

  async createTodo(req, res) {
    const payload = pick(req.body, this.allowedPayloads);
    const response = await this.create.execute(payload);
    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "Todo added successfully");
  }

  async updateTodo(req, res) {
    const { id: _id } = pick(req.params, ["id"]);
    const body = pick(req.body, ["", ""]);
    const payload = { ...body, _id };
    const response = await this.update.execute(payload);
    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "Todo udpated successfully");
  }

  async deleteTodo(req, res) {
    const { id: _id } = pick(req.params, ["id"]);
    const payload = { _id };
    const response = await this.delete.execute(payload);
    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "Todo deleted successfully!");
  }

  async getTodos(req, res) {
    const response = await this.get.execute();
    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "Todo(s) fetched successfully!");
  }

  async getTodo(req, res) {
    const { id: _id } = pick(req.params, ["id"]);
    const payload = { _id };
    const response = await this.getOne.execute(payload);
    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "Todo fetched successfully!");
  }
}

export default TodoController;
