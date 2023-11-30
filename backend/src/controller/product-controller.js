import { db } from "../../lib/db.js";

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

export default {
  getAllProductController,
  createProductController,
};
