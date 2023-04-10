import UseCase from "app/UseCase";
import { assert } from "chai";
import UserRepository from "containers/users/UserRepository";

class AuthUser<IUser> extends UseCase<IUser> {
  userRepository: UserRepository;
  constructor({ userRepository }: { userRepository: UserRepository }) {
    super();
    this.userRepository = userRepository;
    assert(userRepository, "User Repository isn't provided");
  }

  execute(payload: IUser): Promise<IUser> {
    // Implement any logic needed for login in a user
    return this.userRepository.login(payload);
  }
}

export default AuthUser;
