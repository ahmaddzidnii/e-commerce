import express from "express";
import { db } from "../../lib/db.js";
import { verifyJWT } from "../middleware/verify-jwt-middleware.js";
import { uploadAvatarOptions } from "../middleware/multer-middleware.js";
import userController from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.get("/users/:id", verifyJWT, async (req, res) => {
  const { id } = req.params;
  const user = await db.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      username: true,
      email: true,
      password: true,
    },
  });

  return res.json(user);
});

userRouter.post("/avatar/:id", verifyJWT, uploadAvatarOptions.single("avatar"), userController.avatar);

export { userRouter };
