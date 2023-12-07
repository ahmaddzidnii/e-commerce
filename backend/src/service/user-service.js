import { registerUserValidation } from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import { db } from "../../lib/db.js";
import { ResponseError } from "../error/response-error.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (request) => {
  const user = validate(registerUserValidation, request);

  const countUser = await db.user.count({
    where: {
      username: user.username,
    },
  });

  if (user.password !== user.confirmPassword) {
    throw new ResponseError("Password does not match", 400);
  }

  if (countUser === 1) {
    throw new ResponseError("Username already exists", 400);
  }

  user.password = await bcrypt.hash(user.password, 10);

  const data = {
    username: user.username,
    email: user.email,
    password: user.password,
  };

  const secret = process.env.JWT_SECRET;

  const token = jwt.sign(data, secret, { expiresIn: 60 * 60 * 1 });

  const result = await db.user.create({
    data: { ...data, token },
    select: {
      id: true,
      username: true,
      email: true,
      token: true,
    },
  });

  return result;
};

export default {
  register,
};
