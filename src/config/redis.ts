export const redis = {
  auth: {
    doc: "Database requires authentication",
    format: Boolean,
    default: true,
    env: "REDIS_AUTH",
    sensitive: false,
  },
  port: {
    doc: "The redis database port",
    format: "port",
    default: 6379,
    env: "REDIS_PORT",
    sensitive: false,
  },
  host: {
    doc: "The redis database host",
    format: "*",
    default: "localhost",
    env: "REDIS_HOST",
    sensitive: false,
  },
  name: {
    doc: "The redis database name",
    format: "*",
    default: "",
    env: "REDIS_NAME",
    sensitive: true,
  },
  user: {
    doc: "The redis database username",
    format: "*",
    default: "",
    env: "REDIS_USER",
    sensitive: true,
  },
  password: {
    doc: "The redis database password",
    format: "*",
    default: "",
    env: "REDIS_PASSWORD",
    sensitive: true,
  },
  url: {
    doc: "The redis url",
    format: "*",
    default: "",
    env: "REDIS_URL",
    sensitive: true,
  },
};