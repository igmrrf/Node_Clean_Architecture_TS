import UseCase from "app/UseCase";

class CreateUser extends UseCase {
  constructor({ userRepository }) {
    super();
    this.userRepository = userRepository;
  }

  execute(payload) {
    // Implement any logic needed for creating a user
    return this.userRepository.create(payload);
  }
}

export default CreateUser;
