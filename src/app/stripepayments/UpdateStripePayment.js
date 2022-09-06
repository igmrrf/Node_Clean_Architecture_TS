import UseCase from "app/UseCase";

class UpdateStripePayment extends UseCase {
  constructor({ stripepaymentRepository }) {
    super();
    this.stripepaymentRepository = stripepaymentRepository;
  }

  execute(payload) {
    // Implement any logic needed for updating a stripepayment
    return this.stripepaymentRepository.update(payload);
  }
}

export default UpdateStripePayment;
