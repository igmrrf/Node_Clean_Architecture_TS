import UseCase from "app/UseCase";

class DeleteRefer extends UseCase {
  constructor({ referRepository }) {
    super();
    this.referRepository = referRepository;
  }

  execute(payload) {
    // Implement any logic needed for deleting a refer
    return this.referRepository.delete(payload);
  }
}

export default DeleteRefer;
