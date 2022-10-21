/* eslint-disable no-underscore-dangle */
import sgMail from "@sendgrid/mail";
import config from "config";
import { orderMail, WaitListMail } from "../helpers/template";

sgMail.setApiKey(config.get("sendgrid.apiKey"));

export const waitListWelcome = async (recipient) => {
  if (process.env.NODE_ENV === "test") return "test";
  const msg = {
    to: recipient,
    from: "Node Clean<noreply@domain.com>",
    subject: "Welcome, Successfully Joined WaitList",
    html: WaitListMail(recipient),
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

export const orderSubmission = async (orderDetails) => {
  if (process.env.NODE_ENV === "test") return "test";

  const msg = {
    to: "Founder<founder@domain.com",
    cc: ["Dev Team<dev@domain.com>", "Dev Team<support@domain.com>"],
    from: "Node Clean<noreply@domain.com>",
    subject: "Order Details",
    html: orderMail(orderDetails),
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
