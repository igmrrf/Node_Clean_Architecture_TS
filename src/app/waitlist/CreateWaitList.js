import UseCase from "app/UseCase";

class CreateWaitList extends UseCase {
  constructor({ waitListRepository }) {
    super();
    this.waitListRepository = waitListRepository;
  }

  execute(payload) {
    // Implement any logic needed for add to wait list and sending mail
    return this.waitListRepository.create(payload);
  }
}

export default CreateWaitList;
