import Joi from "joi";

export const waitListSchema = Joi.object({
  email: Joi.string().email().required(),
  discord: Joi.string().required(),
  twitter: Joi.string().required(),
});
