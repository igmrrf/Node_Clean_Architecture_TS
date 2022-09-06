import UseCase from "app/UseCase";

class PaymentWithBitPay extends UseCase {
  constructor({ paymentRepository }) {
    super();
    this.paymentRepository = paymentRepository;
  }

  execute(payload) {
    return this.paymentRepository.payWithBitPay(payload);
  }
}

export default PaymentWithBitPay;
