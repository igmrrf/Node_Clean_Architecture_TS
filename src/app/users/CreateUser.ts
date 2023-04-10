import UseCase from "app/UseCase";
import UserRepository from "containers/users/UserRepository";

class CreateUser<IUser> extends UseCase<IUser> {
  userRepository: UserRepository;
  constructor({ userRepository }: { userRepository: UserRepository }) {
    super();
    this.userRepository = userRepository;
  }

  async execute(payload: IUser): Promise<IUser> {
    // Implement any logic needed for creating a user
    return this.userRepository.create(payload);
  }
}

export default CreateUser;
