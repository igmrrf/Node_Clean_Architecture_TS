export const stripe = {
  stripeSK: {
    doc: "Stripe Secret key",
    format: "*",
    default: null,
    env: "STRIPE_SK",
    sensitive: true,
  },
};
