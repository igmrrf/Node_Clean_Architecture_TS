import UseCase from "app/UseCase";

class UpdatePayment extends UseCase {
  constructor({ paymentRepository }) {
    super();
    this.paymentRepository = paymentRepository;
  }

  execute(payload) {
    // Implement any logic needed for updating a payment
    return this.paymentRepository.update(payload);
  }
}

export default UpdatePayment;
