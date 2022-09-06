import UseCase from "app/UseCase";

class CreatePaymentIntent extends UseCase {
  constructor({ paymentRepository }) {
    super();
    this.paymentRepository = paymentRepository;
  }

  execute(payload) {
    return this.paymentRepository.createIntent(payload);
  }
}

export default CreatePaymentIntent;
