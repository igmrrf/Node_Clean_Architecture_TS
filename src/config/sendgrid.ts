export const sendgrid = {
  apiKey: {
    doc: "SENDGRID API Key",
    format: "*",
    default: null,
    env: "SENDGRID_API_KEY",
    sensitive: true,
  },
  templateId: {
    doc: "SENDGRID Mail template ID",
    format: "*",
    default: null,
    env: "SENDGRID_TEMPLATE_ID",
    sensitive: true,
  },
};
