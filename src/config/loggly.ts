export const loggly = {
  token: {
    doc: "Loggly Token",
    format: "*",
    default: null,
    env: "LOGGLY_TOKEN",
    sensitive: true,
  },
  tags: {
    doc: "Loggly tags",
    format: "*",
    default: ["Winston-Nodejs"],
    env: "LOGGLY_TAGS",
    sensitive: true,
  },
  subdomain: {
    doc: "Loggly subdomain",
    format: "*",
    default: null,
    env: "LOGGLY_SUBDOMAIN",
    sensitive: true,
  },
};
