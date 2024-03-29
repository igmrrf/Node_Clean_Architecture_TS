/**
 * Application specific configuration
 */

export const app = {
  serviceName: {
    doc: "Application name",
    format: "*",
    default: null,
    env: "SERVICE_NAME",
    sensitive: false,
  },
  serviceVersion: {
    doc: "Application version",
    format: "*",
    default: 0.1,
    sensitive: false,
  },
  httpPort: {
    doc: "The REST port to bind",
    format: "port",
    default: 14516,
    env: "PORT",
    sensitive: false,
  },
  bodyLimit: {
    doc: "The maximum size of request bodies (json)",
    format: "*",
    default: "10mb",
    env: "BODY_LIMIT",
    sensitive: false,
  },
  apiVersion: {
    doc: "The API version",
    format: "*",
    default: "v1",
    env: "API_VERSION",
    sensitive: false,
  },
  env: {
    doc: "The application environment",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV",
    sensitive: false,
  },
  allowedOrigins: {
    doc: "Allowed origins for CORS",
    format: "*",
    default: "*",
    env: "ALLOWED_ORIGINS",
    sensitive: false,
  },
  sessionKey: {
    doc: "Session key",
    format: "*",
    default: "session_key",
    env: "SESSION_KEY",
    sensitive: true,
  },
  jwtSecret: {
    doc: "Secret key for signing JWT",
    format: "*",
    default: null,
    env: "JWT_SECRET",
    sensitive: true,
  },
  jwtIssuer: {
    doc: "JWT Issuer",
    format: "*",
    default: "http://letscollabo.live/",
    env: "JWT_ISSUER",
    sensitive: false,
  },
  jwtAudience: {
    doc: "JWT Audience",
    format: "*",
    default: "http://letscollabo.live/",
    env: "JWT_AUDIENCE",
    sensitive: false,
  },
  frontendBasUrl: {
    doc: "Frontend base url",
    format: "*",
    default: "http://letscollabo.live/",
    env: "FRONTEND_BASE_URL",
    sensitive: false,
  },
  cacheExpiry: {
    doc: "Cache expiry",
    format: "*",
    default: 3600,
    env: "CACHE_EXPIRY",
    sensitive: false,
  },
};
