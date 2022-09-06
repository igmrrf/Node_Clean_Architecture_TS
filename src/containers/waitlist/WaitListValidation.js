import Joi from "joi";

export const waitlistSchema = Joi.object({
  email: Joi.string().email().required(),
  discord: Joi.string().required(),
  twitter: Joi.string().required(),
  eth_address: Joi.string().required(),
});
