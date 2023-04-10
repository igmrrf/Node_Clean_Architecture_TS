export const paystack = {
  paystackPK: {
    doc: "Paystack public key",
    format: "*",
    default: null,
    env: "PAYSTACK_PK",
    sensitive: true,
  },
  paystackSK: {
    doc: "Paystack secret key",
    format: "*",
    default: null,
    env: "PAYSTACK_SK",
    sensitive: true,
  },
  paystackBaseUrl: {
    doc: "Paystack API base url",
    format: "*",
    default: "https://api.paystack.co",
    env: "PAYSTACK_URL",
    sensitive: true,
  },
};
