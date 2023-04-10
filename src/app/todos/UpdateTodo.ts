import UseCase from "app/UseCase";
import TodoRepository from "containers/todos/TodoRepository";

class UpdateTodo<ITodo> extends UseCase<ITodo> {
  todoRepository: TodoRepository;
  constructor({ todoRepository }: { todoRepository: TodoRepository }) {
    super();
    this.todoRepository = todoRepository;
  }

  execute(payload: ITodo): Promise<ITodo> {
    // Implement any logic needed for updating a todo
    return this.todoRepository.update(payload);
  }
}

export default UpdateTodo;
