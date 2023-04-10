/* eslint-disable no-underscore-dangle */
import sgMail from "@sendgrid/mail";
import config from "config";
import { signUpTemplate } from "helpers/template";
import { IMail } from "./utilTypes";

const apiKey: string = config.get("sendgrid.apiKey");

sgMail.setApiKey(apiKey);

export const orderSubmission = async (userDetails: IMail) => {
  if (process.env.NODE_ENV === "test") return "test";

  const msg = {
    to: "Founder<founder@domain.com",
    cc: ["Dev Team<dev@domain.com>", "Dev Team<support@domain.com>"],
    from: "Node Clean<noreply@domain.com>",
    subject: "Welcome!",
    html: signUpTemplate(userDetails.username),
  };
  let info;
  try {
    info = await sgMail.send(msg);
  } catch (error: any) {
    if (error.response) {
      return error.response.body;
    }
  }
  return info;
};
