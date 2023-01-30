import UseCase from "app/UseCase";

class GetTodos extends UseCase {
  constructor({ todoRepository }) {
    super();
    this.todoRepository = todoRepository;
  }

  execute(payload) {
    // Implement any logic needed for getting all todos
    return this.todoRepository.get(payload);
  }
}

export default GetTodos;
