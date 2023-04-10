import UseCase from "app/UseCase";
import UserRepository from "containers/users/UserRepository";

class UpdateUser<IUser> extends UseCase<IUser> {
  userRepository: UserRepository;
  constructor({ userRepository }: { userRepository: UserRepository }) {
    super();
    this.userRepository = userRepository;
  }

  async execute(payload: IUser): Promise<IUser> {
    // Implement any logic needed for updating a user
    return this.userRepository.update(payload);
  }
}

export default UpdateUser;
