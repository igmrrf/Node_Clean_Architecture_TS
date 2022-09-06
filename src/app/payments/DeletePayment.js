import UseCase from "app/UseCase";

class DeletePayment extends UseCase {
  constructor({ paymentRepository }) {
    super();
    this.paymentRepository = paymentRepository;
  }

  execute(payload) {
    // Implement any logic needed for deleting a payment
    return this.paymentRepository.delete(payload);
  }
}

export default DeletePayment;
