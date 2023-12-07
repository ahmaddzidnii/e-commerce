import Joi from "joi";

const registerUserValidation = Joi.object({
  username: Joi.string().max(100).required(),
  email: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
  confirmPassword: Joi.ref("password"),
});

export { registerUserValidation };
