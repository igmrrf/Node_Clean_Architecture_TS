import UseCase from "app/UseCase";
import UserRepository from "containers/users/UserRepository";

class GetUsers<IUser> extends UseCase<IUser> {
  userRepository: UserRepository;
  constructor({ userRepository }: { userRepository: UserRepository }) {
    super();
    this.userRepository = userRepository;
  }

  async execute(payload: IUser): Promise<IUser> {
    // Implement any logic needed for getting all users
    return this.userRepository.get(payload);
  }
}

export default GetUsers;
