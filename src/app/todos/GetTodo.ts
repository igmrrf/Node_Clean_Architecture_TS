import UseCase from "app/UseCase";
import TodoRepository from "containers/todos/TodoRepository";

class GetTodo<ITodo> extends UseCase<ITodo> {
  todoRepository: TodoRepository;
  constructor({ todoRepository }: { todoRepository: TodoRepository }) {
    super();
    this.todoRepository = todoRepository;
  }

  execute(payload: ITodo): Promise<ITodo> {
    // Implement any logic needed for getting a todo
    return this.todoRepository.getOne(payload);
  }
}

export default GetTodo;
