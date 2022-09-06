/* eslint-disable no-underscore-dangle */
import sgMail from "@sendgrid/mail";
import config from "config";
import { orderMail, WaitListMail } from "../helpers/template";

sgMail.setApiKey(config.get("sendgrid.apiKey"));

export const waitListWelcome = async (recipient) => {
  if (process.env.NODE_ENV === "test") return "test";
  const msg = {
    to: recipient,
    from: "NFT Print Pro<noreply@nftprintpro.com>",
    subject: "Welcome, Successfully Joined Waitlist",
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

export const orderSubmission = async (orderdetails) => {
  if (process.env.NODE_ENV === "test") return "test";

  const msg = {
    to: "Founder<founder@nftprintpro.com",
    cc: ["Dev Team<dev@nftprintpro.com>", "Dev Team<support@nftprintpro.com>"],
    from: "NFT Print Pro<noreply@nftprintpro.com>",
    subject: "Order Details",
    html: orderMail(orderdetails),
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
