import express from "express";
import { db } from "../../lib/db.js";
const router = express.Router();
import productController from "../controller/product-controller.js";

router.get("/", (req, res) => {
  res.json("Hello World!");
});
router.get("/products", productController.getAllProductController);
router.post("/products", productController.createProductController);

export default router;
