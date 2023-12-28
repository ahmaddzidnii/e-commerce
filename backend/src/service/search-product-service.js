import { db } from "../../lib/db.js";
import { ResponseError } from "../error/response-error.js";

const searchHintService = async (req) => {
  const { query } = req.query;

  if (!query) {
    throw new ResponseError("search hint not found", 404);
  }

  const search_hint = await db.product.findMany({
    where: {
      product_name: {
        contains: query,
      },
    },
    take: 10,
    select: {
      id: true,
      product_name: true,
      product_image: true,
      category: true,
      price: true,
    },
  });

  return search_hint;
};

export default {
  searchHintService,
};
