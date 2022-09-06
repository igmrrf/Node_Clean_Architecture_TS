import UseCase from "app/UseCase";

class PaymentWithStripe extends UseCase {
  constructor({ paymentRepository }) {
    super();
    this.paymentRepository = paymentRepository;
  }

  execute(payload) {
    return this.paymentRepository.payWithStripe(payload);
  }
}

export default PaymentWithStripe;
