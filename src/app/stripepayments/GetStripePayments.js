import UseCase from "app/UseCase";

class GetStripePayments extends UseCase {
  constructor({ stripepaymentRepository }) {
    super();
    this.stripepaymentRepository = stripepaymentRepository;
  }

  execute(payload) {
    // Implement any logic needed for getting all stripepayments
    return this.stripepaymentRepository.get(payload);
  }
}

export default GetStripePayments;
