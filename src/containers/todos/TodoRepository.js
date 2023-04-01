import ResourceNotFoundError from "interfaces/rest/errors/ResourceNotFoundError";
import ConflictError from "interfaces/rest/errors/ConflictError";
import BaseRepository from "base/repositories";

class TodoRepository extends BaseRepository {
  constructor({ models: { Todo }, currentUser }) {
    super({ Model: Todo });
    this.Todo = Todo;
    this.currentUser = currentUser;
  }

  async create(payload) {
    if (payload.title) {
      const existingTodo = await this.find({ title: payload.title }, undefined, {
        lean: true,
      });
      if (existingTodo) {
        throw new ConflictError("Todo already exists");
      }
    }
    const newTodo = await this.createDoc({
      ...payload,
      created_by: this.currentUser._id,
    });
    return newTodo.getPublicFields();
  }

  async update(payload) {
    const existingTodo = await this.findById(payload._id, undefined, { lean: true });
    if (!existingTodo) {
      throw new ResourceNotFoundError("Todo not found");
    }
    const newTodo = await this.findOneAndUpdate(
      {
        _id: payload._id,
      },
      { ...payload },
      { new: true },
    );
    return newTodo.getPublicFields();
  }

  async delete(payload) {
    const existingTodo = await this.findById(payload._id, undefined, { lean: true });
    if (!existingTodo) {
      throw new ResourceNotFoundError("Todo not found");
    }
    const removeTodo = await this.findOneAndDelete({
      _id: payload._id,
    });
    return removeTodo.getPublicFields();
  }

  async get() {
    const existingTodos = await this.find({}, undefined, { lean: true }, true);
    return existingTodos;
  }

  async getOne(payload) {
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
