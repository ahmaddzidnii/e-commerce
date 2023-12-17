import { db } from "../../lib/db.js";
import { ResponseError } from "../error/response-error.js";
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

const productRecomendationService = async (req) => {
  let { limit } = req.query;

  if (!limit) {
    limit = 48;
  }

  if (isNaN(limit)) {
    throw new ResponseError("Limit must be a number", 400);
  }
  if (limit < 48) {
    throw new ResponseError("Limit must be greater than 48", 400);
  }

  const product = await db.product.findMany();

  if (limit > product.length) {
    throw new ResponseError("Limit must be less than the number of products", 400);
  }

  const productShuffle = product.sort(() => 0.5 - Math.random());
  const numberProductsToReturn = parseInt(limit) || 48;

  const randomProduct = productShuffle.slice(0, numberProductsToReturn);

  return randomProduct;
};

export default { createProductService, productRecomendationService };
