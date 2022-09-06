import UseCase from "app/UseCase";

class GetInvoice extends UseCase {
  constructor({ invoiceRepository }) {
    super();
    this.invoiceRepository = invoiceRepository;
  }

  execute(payload) {
    // Implement any logic needed for getting a invoice
    return this.invoiceRepository.getOne(payload);
  }
}

export default GetInvoice;
