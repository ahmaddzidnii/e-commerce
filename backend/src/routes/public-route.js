import express from "express";
import userController from "../controller/user.controller.js";
import { refreshTokenController } from "../controller/refresh-token-controler.js";
import { db } from "../../lib/db.js";
import productController from "../controller/product-controller.js";

const publicRouter = express.Router();
publicRouter.post("/register", userController.register);
publicRouter.post("/login", userController.login);
publicRouter.get("/refresh", refreshTokenController);
publicRouter.delete("/logout", userController.logout);

publicRouter.get("/auth/google", userController.loginWithGoogle);
// Google Callback Login
publicRouter.get("/auth/google/callback", userController.callbackLoginGoogle);

// Products
publicRouter.get("/products", async (req, res) => {
  const products = await db.product.findMany();
  return res.json({
    message: "Hello World",
    data: products,
  });
});

publicRouter.get("/recomendations", productController.productRecomendationController);
export { publicRouter };
