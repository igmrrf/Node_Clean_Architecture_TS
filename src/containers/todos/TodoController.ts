import { Request, Response } from "express";
import BaseController from "interfaces/rest/controllers";
import { pick } from "lodash";

class TodoController extends BaseController {
  allowedPayloads: string[];
  remove: any;
  create: any;
  update: any;
  getOne: any;
  getAll: any;
  constructor({
    createTodo,
    updateTodo,
    deleteTodo,
    getTodo,
    getTodos,
  }: {
    createTodo: any;
    updateTodo: any;
    deleteTodo: any;
    getTodo: any;
    getTodos: any;
  }) {
    super();
    this.create = createTodo;
    this.update = updateTodo;
    this.remove = deleteTodo;
    this.getOne = getTodo;
    this.getAll = getTodos;
    this.allowedPayloads = ["value", "anotherValue"];
  }

  async createTodo(req: Request, res: Response) {
    const payload = pick(req.body, this.allowedPayloads);
    const response = await this.create.execute(payload);
    return this.responseBuilder.getResponseHandler(req, res).onSuccess(response, "Todo added successfully");
  }

  async updateTodo(req: Request, res: Response) {
    const { id: _id } = pick(req.params, ["id"]);
    const body = pick(req.body, ["", ""]);
    const payload = { ...body, _id };
    const response = await this.update.execute(payload);
    return this.responseBuilder.getResponseHandler(req, res).onSuccess(response, "Todo updated successfully");
  }

  async deleteTodo(req: Request, res: Response) {
    const { id: _id } = pick(req.params, ["id"]);
    const payload = { _id };
    const response = await this.remove.execute(payload);
    return this.responseBuilder.getResponseHandler(req, res).onSuccess(response, "Todo deleted successfully!");
  }

  async getTodos(req: Request, res: Response) {
    const response = await this.getAll.execute();
    return this.responseBuilder.getResponseHandler(req, res).onSuccess(response, "Todo(s) fetched successfully!");
  }

  async getTodo(req: Request, res: Response) {
    const { id: _id } = pick(req.params, ["id"]);
    const payload = { _id };
    const response = await this.getOne.execute(payload);
    return this.responseBuilder.getResponseHandler(req, res).onSuccess(response, "Todo fetched successfully!");
  }
}

export default TodoController;
