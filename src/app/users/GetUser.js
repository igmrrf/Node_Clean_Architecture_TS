import UseCase from "app/UseCase";

class GetUser extends UseCase {
  constructor({ userRepository }) {
    super();
    this.userRepository = userRepository;
  }

  execute(payload) {
    // Implement any logic needed for getting a user
    return this.userRepository.getOne(payload);
  }
}

export default GetUser;
