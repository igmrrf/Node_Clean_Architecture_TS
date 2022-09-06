import UseCase from "app/UseCase";

class AuthUser extends UseCase {
  constructor({ userRepository }) {
    super();
    this.userRepository = userRepository;
  }

  execute(payload) {
    // Implement any logic needed for creating a user
    return this.userRepository.login(payload);
  }
}

export default AuthUser;
