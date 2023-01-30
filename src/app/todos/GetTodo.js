import UseCase from "app/UseCase";

class GetTodo extends UseCase {
  constructor({ todoRepository }) {
    super();
    this.todoRepository = todoRepository;
  }

  execute(payload) {
    // Implement any logic needed for getting a todo
    return this.todoRepository.getOne(payload);
  }
}

export default GetTodo;
