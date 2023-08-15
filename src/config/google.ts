export const google = {
  clientID: {
    doc: "AWS cloud name",
    format: "*",
    default: null,
    env: "CLIENT_ID",
    sensitive: true,
  },
  clientSecret: {
    doc: "AWS API key",
    format: "*",
    default: null,
    env: "CLIENT_SECRET",
    sensitive: true,
  },
};
