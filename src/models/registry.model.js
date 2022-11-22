import joi from "joi";

export const registrySchema = joi.object({
  date: joi.string().required(),
  user: joi.object().required(),
  label: joi.string().min(3).required(),
  type: joi.string().valid("income", "outcome").required(),
  value: joi.number().required(),
});