import { Client, Models } from "bitpay-sdk";

const config = "public/BitPay.config.json";

class BitPay {
  client: any;
  constructor() {
    this.client = new Client(config);
  }

  async createInvoice(payload: { email: string; amount: number; order: string; currency: string }) {
    const { email, amount, order, currency } = payload;
    const buyer = {
      name: "",
      address1: "",
      address2: "",
      locality: "",
      region: "",
      postalCode: "",
      country: "",
      phone: "",
      email,
      notify: true,
    };

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

  async confirmInvoice(invoiceId: string) {
    const invoice = await this.client.GetInvoice(invoiceId);
    // Checking the status of the invoice
    return invoice;
  }
}

export default BitPay;
