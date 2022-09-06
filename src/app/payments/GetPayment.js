import UseCase from "app/UseCase";

class GetPayment extends UseCase {
  constructor({ paymentRepository }) {
    super();
    this.paymentRepository = paymentRepository;
  }

  execute(payload) {
    // Implement any logic needed for getting a payment
    return this.paymentRepository.getOne(payload);
  }
}

export default GetPayment;
