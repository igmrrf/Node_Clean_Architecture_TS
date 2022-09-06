import UseCase from "app/UseCase";

class CreateInvoice extends UseCase {
  constructor({ invoiceRepository }) {
    super();
    this.invoiceRepository = invoiceRepository;
  }

  execute(payload) {
    // Implement any logic needed for creating a invoice
    return this.invoiceRepository.create(payload);
  }
}

export default CreateInvoice;
