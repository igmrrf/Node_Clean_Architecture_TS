import UseCase from "app/UseCase";

class UpdateWaitList extends UseCase {
  constructor({ waitListRepository }) {
    super();
    this.waitListRepository = waitListRepository;
  }

  // eslint-disable-next-line no-unused-vars
  execute(payload) {
    return this.waitListRepository.update(payload);
  }
}

export default UpdateWaitList;
