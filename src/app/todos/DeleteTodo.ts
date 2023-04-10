import UseCase from "app/UseCase";
import TodoRepository from "containers/todos/TodoRepository";

class DeleteTodo<ITodo> extends UseCase<ITodo> {
  todoRepository: TodoRepository;
  constructor({ todoRepository }: { todoRepository: TodoRepository }) {
    super();
    this.todoRepository = todoRepository;
  }

  async execute(payload: ITodo): Promise<ITodo> {
    // Implement any logic needed for deleting a todo
    return this.todoRepository.delete(payload);
  }
}

export default DeleteTodo;
