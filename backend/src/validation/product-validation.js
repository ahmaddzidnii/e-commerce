import Joi from "joi";

const productValidationSchema = Joi.object({
  name: Joi.string().max(255).required(),
  description: Joi.string().optional(),
  price: Joi.string().required(),
});

export { productValidationSchema };
