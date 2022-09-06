import UseCase from "app/UseCase";

class GetWaitList extends UseCase {
  constructor({ waitListRepository }) {
    super();
    this.waitListRepository = waitListRepository;
  }

  // eslint-disable-next-line no-unused-vars
  execute(payload) {
    return this.waitListRepository.getOne(payload);
  }
}

export default GetWaitList;
