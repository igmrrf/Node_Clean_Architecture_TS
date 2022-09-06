import UseCase from "app/UseCase";

class DeleteInvoice extends UseCase {
  constructor({ invoiceRepository }) {
    super();
    this.invoiceRepository = invoiceRepository;
  }

  execute(payload) {
    // Implement any logic needed for deleting a invoice
    return this.invoiceRepository.delete(payload);
  }
}

export default DeleteInvoice;
