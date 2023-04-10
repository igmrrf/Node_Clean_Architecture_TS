import UseCase from "app/UseCase";
import UserRepository from "containers/users/UserRepository";

class GetUser<IUser> extends UseCase<IUser> {
  userRepository: UserRepository;
  constructor({ userRepository }: { userRepository: UserRepository }) {
    super();
    this.userRepository = userRepository;
  }

  async execute(payload: IUser): Promise<IUser> {
    // Implement any logic needed for getting a user
    return this.userRepository.getOne(payload);
  }
}

export default GetUser;
