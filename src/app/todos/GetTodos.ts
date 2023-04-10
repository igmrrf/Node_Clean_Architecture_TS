import UseCase from "app/UseCase";
import TodoRepository from "containers/todos/TodoRepository";

class GetTodos<ITodo> extends UseCase<ITodo> {
  todoRepository: TodoRepository;
  constructor({ todoRepository }: { todoRepository: TodoRepository }) {
    super();
    this.todoRepository = todoRepository;
  }

  async execute(payload: any) {
    // Implement any logic needed for getting all todos
    return this.todoRepository.get(payload);
  }
}

export default GetTodos;
