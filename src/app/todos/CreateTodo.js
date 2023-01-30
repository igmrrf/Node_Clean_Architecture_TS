import UseCase from "app/UseCase";

class CreateTodo extends UseCase {
  constructor({ todoRepository }) {
    super();
    this.todoRepository = todoRepository;
  }

  execute(payload) {
    // Implement any logic needed for creating a todo
    return this.todoRepository.create(payload);
  }
}

export default CreateTodo;
