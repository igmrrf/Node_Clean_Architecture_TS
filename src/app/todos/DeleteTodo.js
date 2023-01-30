import UseCase from "app/UseCase";

class DeleteTodo extends UseCase {
  constructor({ todoRepository }) {
    super();
    this.todoRepository = todoRepository;
  }

  execute(payload) {
    // Implement any logic needed for deleting a todo
    return this.todoRepository.delete(payload);
  }
}

export default DeleteTodo;
