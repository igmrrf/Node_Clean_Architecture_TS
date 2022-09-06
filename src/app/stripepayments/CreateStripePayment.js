import UseCase from "app/UseCase";

class CreateStripePayment extends UseCase {
  constructor({ stripepaymentRepository }) {
    super();
    this.stripepaymentRepository = stripepaymentRepository;
  }

  execute(payload) {
    // Implement any logic needed for creating a stripepayment
    return this.stripepaymentRepository.create(payload);
  }
}

export default CreateStripePayment;
