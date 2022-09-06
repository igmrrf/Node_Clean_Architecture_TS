import UseCase from "app/UseCase";

class GetInvoices extends UseCase {
  constructor({ invoiceRepository }) {
    super();
    this.invoiceRepository = invoiceRepository;
  }

  execute(payload) {
    // Implement any logic needed for getting all invoices
    return this.invoiceRepository.get(payload);
  }
}

export default GetInvoices;
