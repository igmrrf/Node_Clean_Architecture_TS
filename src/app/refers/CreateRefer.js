import UseCase from "app/UseCase";

class CreateRefer extends UseCase {
  constructor({ referRepository }) {
    super();
    this.referRepository = referRepository;
  }

  execute(payload) {
    // Implement any logic needed for creating a refer
    return this.referRepository.create(payload);
  }
}

export default CreateRefer;
