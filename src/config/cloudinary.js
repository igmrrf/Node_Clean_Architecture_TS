const config = {
  cloudName: {
    doc: "Cloudinary cloud name",
    format: "*",
    default: null,
    env: "CLOUDINARY_CLOUD_NAME",
    sensitive: true,
  },
  apiKey: {
    doc: "Cloudinary API key",
    format: "*",
    default: null,
    env: "CLOUDINARY_API_KEY",
    sensitive: true,
  },
  apiSecret: {
    doc: "Cloudinary API secret",
    format: "*",
    default: null,
    env: "CLOUDINARY_API_SECRET",
    sensitive: true,
  },
};

exports.cloudinary = config;
