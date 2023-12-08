import express from "express";
import userController from "../controller/user.controller.js";
import { refreshTokenController } from "../controller/refresh-token-controler.js";

const publicRouter = express.Router();
publicRouter.post("/register", userController.register);
publicRouter.post("/login", userController.login);
publicRouter.get("/refresh", refreshTokenController);
publicRouter.delete("/logout", userController.logout);

export { publicRouter };
