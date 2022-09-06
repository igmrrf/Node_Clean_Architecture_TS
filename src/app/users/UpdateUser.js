import UseCase from "app/UseCase";

class UpdateUser extends UseCase {
  constructor({ userRepository }) {
    super();
    this.userRepository = userRepository;
  }

  execute(payload) {
    // Implement any logic needed for updating a user
    return this.userRepository.update(payload);
  }
}

export default UpdateUser;
