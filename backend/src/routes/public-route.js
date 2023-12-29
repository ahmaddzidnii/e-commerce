import express from "express";
import userController from "../controller/user.controller.js";
import { refreshTokenController } from "../controller/refresh-token-controler.js";
import productController from "../controller/product-controller.js";
import searchProductController from "../controller/search-product-controller.js";

const publicRouter = express.Router();
publicRouter.post("/register", userController.register);
publicRouter.post("/login", userController.login);
publicRouter.get("/refresh", refreshTokenController);
publicRouter.delete("/logout", userController.logout);

publicRouter.get("/auth/google", userController.loginWithGoogle);
// Google Callback Login
publicRouter.get("/auth/google/callback", userController.callbackLoginGoogle);

// Products
publicRouter.get("/products", productController.productsController);

publicRouter.get("/recomendations", productController.productRecomendationController);
export { publicRouter };

publicRouter.get("/search-hint", searchProductController.searchHintController);
publicRouter.get("/search", searchProductController.searchProductController);
