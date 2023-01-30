/* eslint-disable no-underscore-dangle */
import sgMail from "@sendgrid/mail";
import config from "config";
import { signUpTemplate } from "helpers/template";

sgMail.setApiKey(config.get("sendgrid.apiKey"));

export const orderSubmission = async (userDetails) => {
  if (process.env.NODE_ENV === "test") return "test";

  const msg = {
    to: "Founder<founder@domain.com",
    cc: ["Dev Team<dev@domain.com>", "Dev Team<support@domain.com>"],
    from: "Node Clean<noreply@domain.com>",
    subject: "Welcome!",
    html: signUpTemplate(userDetails),
  };
  let info;
  try {
    info = await sgMail.send(msg);
  } catch (error) {
    if (error.response) {
      return error.response.body;
    }
  }
  return info;
};
