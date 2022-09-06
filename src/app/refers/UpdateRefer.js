import UseCase from "app/UseCase";

class UpdateRefer extends UseCase {
  constructor({ referRepository }) {
    super();
    this.referRepository = referRepository;
  }

  execute(payload) {
    // Implement any logic needed for updating a refer
    return this.referRepository.update(payload);
  }
}

export default UpdateRefer;
