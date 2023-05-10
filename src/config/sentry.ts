export const sentry = {
  dsn: {
    doc: "Sentry DSN",
    format: "*",
    default: null,
    env: "SENTRY_DSN",
    sensitive: true,
  },
};
