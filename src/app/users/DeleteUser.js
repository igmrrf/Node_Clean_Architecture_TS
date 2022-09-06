import UseCase from "app/UseCase";

class DeleteUser extends UseCase {
  constructor({ userRepository }) {
    super();
    this.userRepository = userRepository;
  }

  execute(payload) {
    // Implement any logic needed for deleting a user
    return this.userRepository.delete(payload);
  }
}

export default DeleteUser;
