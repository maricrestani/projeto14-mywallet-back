import joi from "joi";

export const userSchema = joi.object({
  name: joi.string().min(3).required(),
  email: joi.string().min(3).email().required(),
  password: joi.string().min(6).required(),
});