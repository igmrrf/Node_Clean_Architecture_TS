import UseCase from "app/UseCase";

class GetRefers extends UseCase {
  constructor({ referRepository }) {
    super();
    this.referRepository = referRepository;
  }

  execute(payload) {
    // Implement any logic needed for getting all refers
    return this.referRepository.get(payload);
  }
}

export default GetRefers;
