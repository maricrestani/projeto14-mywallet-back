import joi from "joi";

export const registrySchema = joi.object({
  label: joi.string().required(),
  type: joi.string().valid("income", "outcome").required(),
  value: joi.number().required(),
});