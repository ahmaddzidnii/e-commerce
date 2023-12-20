import { db } from "../../lib/db.js";
import { ResponseError } from "../error/response-error.js";
import productService from "../service/product-service.js";

const getAllProductController = async (req, res) => {
  try {
    const product = await db.product.findMany();
    return res.json(product);
  } catch (error) {
    return res.json(error);
  }
};
const createProductController = async (req, res) => {
  const { name, price } = req.body;
  try {
    const product = await db.product.create({
      data: {
        name,
        price,
      },
    });
    return res.json(product);
  } catch (error) {
    return res.json(error);
  }
};

// Recomedations

const productRecomendationController = async (req, res, next) => {
  try {
    const data = await productService.productRecomendationService(req);
    return res.json({
      status: 200,
      data: data,
    });
  } catch (error) {
    if (error instanceof ResponseError) {
      console.log("ok");
    } else {
      console.log(error);
    }
    next(error);
  }
};

const productsController = async (req, res, next) => {
  try {
    const data = await productService.productsService(req);
    return res.json({
      status: 200,
      data: data.products,
      pagination: {
        total_page: data.pagination.total_page,
        current_page: data.pagination.current_page,
        count: data.pagination.count,
        has_next_page: data.pagination.has_next_page,
        has_prev_page: data.pagination.has_prev_page,
      },
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
export default {
  getAllProductController,
  createProductController,
  productRecomendationController,
  productsController,
};
