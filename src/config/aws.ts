export const aws = {
  cloudName: {
    doc: "AWS cloud name",
    format: "*",
    default: null,
    env: "S3_CLOUD_NAME",
    sensitive: true,
  },
  apiKey: {
    doc: "AWS API key",
    format: "*",
    default: null,
    env: "S3_API_KEY",
    sensitive: true,
  },
  apiSecret: {
    doc: "AWS API secret",
    format: "*",
    default: null,
    env: "S3_API_SECRET",
    sensitive: true,
  },
};
