import UseCase from "app/UseCase";

class GetWaitLists extends UseCase {
  constructor({ waitListRepository }) {
    super();
    this.waitListRepository = waitListRepository;
  }

  execute(payload) {
    // Implement any logic needed for add to wait list and sending mail
    return this.waitListRepository.get(payload);
  }
}

export default GetWaitLists;
