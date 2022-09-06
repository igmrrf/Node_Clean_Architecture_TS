import UseCase from "app/UseCase";

class GetStripePayment extends UseCase {
  constructor({ stripepaymentRepository }) {
    super();
    this.stripepaymentRepository = stripepaymentRepository;
  }

  execute(payload) {
    // Implement any logic needed for getting a stripepayment
    return this.stripepaymentRepository.getOne(payload);
  }
}

export default GetStripePayment;
