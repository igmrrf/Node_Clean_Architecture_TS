import UseCase from "app/UseCase";

class GetPayments extends UseCase {
  constructor({ paymentRepository }) {
    super();
    this.paymentRepository = paymentRepository;
  }

  execute(payload) {
    // Implement any logic needed for getting all payments
    return this.paymentRepository.get(payload);
  }
}

export default GetPayments;
