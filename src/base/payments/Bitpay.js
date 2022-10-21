import { Client, Models } from "bitpay-sdk";

const config = "public/BitPay.config.json";

class Bitpay {
  constructor() {
    const client = new Client(config);
    this.client = client;
  }

  async createInvoice(payload) {
    const { email, amount, order, currency } = payload;
    const buyer = {};
    buyer.email = email;
    buyer.notify = true;

    const invoiceData = new Models.Invoice(amount, currency);
    invoiceData.price = amount;
    invoiceData.buyer = buyer;
    invoiceData.orderId = order;
    invoiceData.fullNotifications = true;
    invoiceData.extendedNotifications = true;
    invoiceData.notificationURL = "https://test.domain.com/confirm";
    invoiceData.redirectURL = `https://test.domain.com/confirm/${order}`;
    invoiceData.itemDesc = "Item Description.";
    invoiceData.notificationEmail = "[dev@domain.com]";

    const invoice = await this.client.CreateInvoice(invoiceData);

    return invoice;
  }

  async confirmInvoice(invoiceId) {
    const invoice = await this.client.GetInvoice(invoiceId);
    // Checking the status of the invoice
    return invoice;
  }
}

export default Bitpay;
