import { db } from "../../lib/db.js";
import { productValidationSchema } from "../validation/product-validation.js";
import { validate } from "../validation/validation.js";

const createProductService = async (req) => {
  const product = validate(productValidationSchema, req);

  const createProduct = await db.product.create({
    data: {
      name: product.name,
      price: product.price,
      description: product.description,
      
    },
  });
};

export default { createProductService };
