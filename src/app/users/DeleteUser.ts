import UseCase from "app/UseCase";
import UserRepository from "containers/users/UserRepository";

class DeleteUser<IUser> extends UseCase<IUser> {
  userRepository: UserRepository;
  constructor({ userRepository }: { userRepository: UserRepository }) {
    super();
    this.userRepository = userRepository;
  }

  async execute(payload: IUser): Promise<IUser> {
    // Implement any logic needed for deleting a user
    return this.userRepository.delete(payload);
  }
}

export default DeleteUser;
