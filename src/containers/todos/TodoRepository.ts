import BaseRepository from "base/repositories";
import ConflictError from "interfaces/rest/errors/ConflictError";
import ResourceNotFoundError from "interfaces/rest/errors/ResourceNotFoundError";
import { HydratedDocument, Models } from "mongoose";
import Todo from "./TodoEntity";
import { ITodo } from "./TodoTypes";

class TodoRepository extends BaseRepository {
  Todo: Models;
  currentUser: HydratedDocument<ITodo>;

  constructor({ models: { Todo }, currentUser }: { models: any; currentUser: any }) {
    super({ Model: Todo });
    this.Todo = Todo;
    this.currentUser = currentUser;
  }

  async create(payload: any): Promise<any> {
    if (payload.title) {
      const existingTodo = await this.find({ title: payload.title }, undefined, {
        lean: true,
      });
      if (existingTodo) {
        throw new ConflictError("Todo already exists");
      }
    }
    const newTodo: HydratedDocument<ITodo, Todo> = await this.createDoc({
      ...payload,
    });
    return newTodo.getPublicFields();
  }

  async update(payload: any): Promise<any> {
    const existingTodo = await this.findById(payload._id, undefined, { lean: true });
    if (!existingTodo) {
      throw new ResourceNotFoundError("Todo not found");
    }
    const newTodo: HydratedDocument<ITodo, Todo> = await this.findOneAndUpdate(
      {
        _id: payload._id,
      },
      { ...payload },
      { new: true },
    );
    return newTodo.getPublicFields();
  }

  async delete(payload: any): Promise<any> {
    const existingTodo = await this.findById(payload._id, undefined, { lean: true });
    if (!existingTodo) {
      throw new ResourceNotFoundError("Todo not found");
    }
    const removeTodo: HydratedDocument<ITodo, Todo> = await this.findOneAndDelete({
      _id: payload._id,
    });
    return removeTodo.getPublicFields();
  }

  async get(payload: any) {
    const existingTodos = await this.find(payload, undefined, { lean: true }, true);
    return existingTodos;
  }

  async getOne(payload: any): Promise<any> {
    const existingTodo = await this.findById(payload._id, undefined, { lean: true });
    if (!existingTodo) {
      throw new ResourceNotFoundError("Todo not found");
    }
    const getTodo = await this.find({ _id: payload._id }, undefined, {
      lean: true,
    });
    return getTodo;
  }
}

export default TodoRepository;
