import UseCase from "app/UseCase";

class GetRefer extends UseCase {
  constructor({ referRepository }) {
    super();
    this.referRepository = referRepository;
  }

  execute(payload) {
    // Implement any logic needed for getting a refer
    return this.referRepository.getOne(payload);
  }
}

export default GetRefer;
