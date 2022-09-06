import UseCase from "app/UseCase";

class DeleteWaitList extends UseCase {
  constructor({ waitListRepository }) {
    super();
    this.waitListRepository = waitListRepository;
  }

  // eslint-disable-next-line no-unused-vars
  execute(payload) {
    return this.waitListRepository.delete(payload);
  }
}

export default DeleteWaitList;
