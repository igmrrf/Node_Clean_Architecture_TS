import UseCase from "app/UseCase";

class UpdateTodo extends UseCase {
  constructor({ todoRepository }) {
    super();
    this.todoRepository = todoRepository;
  }

  execute(payload) {
    // Implement any logic needed for updating a todo
    return this.todoRepository.update(payload);
  }
}

export default UpdateTodo;
