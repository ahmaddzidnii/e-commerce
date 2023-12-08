import express from "express";
import userController from "../controller/user.controller.js";

const publicRouter = express.Router();
publicRouter.post("/register", userController.register);
publicRouter.post("/login", userController.login);

export { publicRouter };
