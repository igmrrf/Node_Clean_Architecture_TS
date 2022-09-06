import UseCase from "app/UseCase";

class GetUsers extends UseCase {
  constructor({ userRepository }) {
    super();
    this.userRepository = userRepository;
  }

  execute(payload) {
    // Implement any logic needed for getting all users
    return this.userRepository.get(payload);
  }
}

export default GetUsers;
