import UseCase from "app/UseCase";

class CreatePayment extends UseCase {
  constructor({ paymentRepository }) {
    super();
    this.paymentRepository = paymentRepository;
  }

  execute(payload) {
    // Implement any logic needed for creating a payment
    return this.paymentRepository.create(payload);
  }
}

export default CreatePayment;
