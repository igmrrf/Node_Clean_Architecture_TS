const stripe = require("stripe");

class Stripe {
  constructor({ config }) {
    const secretKey = config.get("stripe.stripeSK");
    this.stripe = stripe(secretKey);
  }

  async createAccount({ email, name }) {
    const customer = await this.stripe.customers.create({ email, name });
    return customer;
  }

  async createPaymentIntent(customer, payment) {
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
