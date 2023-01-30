import UseCase from "app/UseCase";
import assert from "assert";
import Password from "helpers/password";

class AuthUser extends UseCase {
  constructor({ userRepository }) {
    super();
    this.userRepository = userRepository;
    assert(userRepository, "User Repository isn't provided");
  }

  async execute(payload) {
    const { username, email, mobile, password } = payload;
    const query = { password: Password.hash(password) };

    if (username) {
      query.username = username;
    }
    if (email) {
      query.username = username;
    }
    if (mobile) {
      query.username = username;
    }

    // Implement any logic needed for login in a user
    const auth = await this.userRepository.login(query);
    return auth;
  }
}

export default AuthUser;
