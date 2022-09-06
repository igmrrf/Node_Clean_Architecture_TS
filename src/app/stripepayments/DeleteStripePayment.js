import UseCase from "app/UseCase";

class DeleteStripePayment extends UseCase {
  constructor({ stripepaymentRepository }) {
    super();
    this.stripepaymentRepository = stripepaymentRepository;
  }

  execute(payload) {
    // Implement any logic needed for deleting a stripepayment
    return this.stripepaymentRepository.delete(payload);
  }
}

export default DeleteStripePayment;
