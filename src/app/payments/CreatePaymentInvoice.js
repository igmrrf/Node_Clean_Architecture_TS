import UseCase from "app/UseCase";

class CreatePaymentInvoice extends UseCase {
  constructor({ paymentRepository }) {
    super();
    this.paymentRepository = paymentRepository;
  }

  execute(payload) {
    return this.paymentRepository.createInvoice(payload);
  }
}

export default CreatePaymentInvoice;
