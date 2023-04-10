import UseCase from "app/UseCase";
import TodoRepository from "containers/todos/TodoRepository";

class CreateTodo<ITodo> extends UseCase<ITodo> {
  todoRepository: TodoRepository;
  constructor({ todoRepository }: { todoRepository: TodoRepository }) {
    super();
    this.todoRepository = todoRepository;
  }

  async execute(payload: ITodo): Promise<ITodo> {
    // Implement any logic needed for creating a todo
    return this.todoRepository.create(payload);
  }
}

export default CreateTodo;
