import { Config } from "convict";
import { Stripe as StripePayment } from "stripe";

class Stripe {
  [x: string]: any;
  stripe: StripePayment;

  constructor({ config }: { config: Config<{ [key: string]: string | number | object }> }) {
    const secretKey = config.get("stripe.stripeSK");
    this.stripe = new StripePayment(secretKey, { typescript: true, apiVersion: "2022-08-01" });
  }

  async createAccount({ email, name }: { email: string; name: string }) {
    const customer = await this.stripe.customers.create({ email, name });
    return customer;
  }

  async createPaymentIntent(customer: { id: string }, payment: { amount: number; currency: string }) {
    const paymentIntent = await this.stripe.paymentIntents.create({
      customer: customer.id,
      setup_future_usage: "off_session",
      amount: payment.amount * 100,
      currency: payment.currency,
      automatic_payment_methods: {
        enabled: false,
      },
    });
    return paymentIntent;
  }
}

export default Stripe;
