import UseCase from "app/UseCase";

class UpdateInvoice extends UseCase {
  constructor({ invoiceRepository }) {
    super();
    this.invoiceRepository = invoiceRepository;
  }

  execute(payload) {
    // Implement any logic needed for updating a invoice
    return this.invoiceRepository.update(payload);
  }
}

export default UpdateInvoice;
