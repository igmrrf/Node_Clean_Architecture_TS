import BaseRepository from "base/repositories";
import { Queue } from "bullmq";
import ConflictError from "interfaces/rest/errors/ConflictError";
import ResourceNotFoundError from "interfaces/rest/errors/ResourceNotFoundError";
import { HydratedDocument, Models } from "mongoose";
import Todo from "./TodoEntity";
import { ITodo } from "./TodoTypes";

class TodoRepository extends BaseRepository {
  Todo: Models;
  currentUser: HydratedDocument<ITodo>;
  notificationQueue: Queue;

  constructor({
    models: { Todo },
    queues: { notificationQueue },
    currentUser,
  }: {
    models: any;
    queues: any;
    currentUser: any;
  }) {
    super({ Model: Todo.default });
    this.notificationQueue = notificationQueue;
    this.Todo = Todo;
    this.currentUser = currentUser;
  }

  async create(payload: any): Promise<any> {
    if (payload.title) {
      const existingTodo: ITodo = await this.find({ title: payload.title }, undefined, {
        lean: true,
      });
      if (existingTodo) {
        throw new ConflictError("Todo already exists");
      }
    }
    const newTodo: HydratedDocument<ITodo, Todo> = await this.createDoc({
      ...payload,
    });
    await this.notificationQueue.add(
      "todo_created",
      {
        todo: newTodo.getPublicFields(),
      },
      {
        delay: 1000,
        repeat: {
          // every: 1000,
          limit: 10,
          pattern: "*/1 * * * *",
        },
        jobId: newTodo._id.toString(),
      },
    );

    const repeatableJobs = await this.notificationQueue.getRepeatableJobs();
    console.log({ repeatableJobs });
    const jobs = await this.notificationQueue.getJobs(["completed"]);
    console.log({ jobs });

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
