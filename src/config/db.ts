export const db = {
  auth: {
    doc: "Database requires authentication",
    format: Boolean,
    default: false,
    env: "MONGO_AUTH",
    sensitive: false,
  },
  port: {
    doc: "The mongo database port",
    format: "port",
    default: 27017,
    env: "MONGO_PORT",
    sensitive: false,
  },
  host: {
    doc: "The mongo database host",
    format: "*",
    default: "localhost",
    env: "MONGO_HOST",
    sensitive: false,
  },
  name: {
    doc: "The mongo database name",
    format: "*",
    default: "",
    env: "MONGO_NAME",
    sensitive: true,
  },
  user: {
    doc: "The mongo database username",
    format: "*",
    default: "",
    env: "MONGO_USER",
    sensitive: true,
  },
  password: {
    doc: "The mongo database password",
    format: "*",
    default: "",
    env: "MONGO_PASSWORD",
    sensitive: true,
  },
};
