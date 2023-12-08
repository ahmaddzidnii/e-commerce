import { loginUserValidation, registerUserValidation } from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import { db } from "../../lib/db.js";
import { ResponseError } from "../error/response-error.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req) => {
  const user = validate(registerUserValidation, req);

  const countUser = await db.user.count({
    where: {
      email: user.email,
    },
  });

  if (user.password !== user.confirmPassword) {
    throw new ResponseError("Password does not match", 400);
  }

  if (countUser === 1) {
    throw new ResponseError("Email already exists", 400);
  }

  user.password = await bcrypt.hash(user.password, 10);

  const data = {
    username: user.username,
    email: user.email,
    password: user.password,
  };

  const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
  const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

  const access_token = jwt.sign(data, ACCESS_TOKEN_SECRET, { expiresIn: "30s" });
  const refresh_token = jwt.sign(data, REFRESH_TOKEN_SECRET, { expiresIn: "1d" });

  const result = await db.user.create({
    data: { ...data, refresh_token, access_token },
    select: {
      id: true,
      username: true,
      email: true,
      refresh_token: true,
      access_token: true,
    },
  });

  return result;
};

const login = async (req) => {
  const user = validate(loginUserValidation, req);

  const [userExist] = await db.user.findMany({
    where: {
      email: user.email,
    },
  });

  if (!userExist) {
    throw new ResponseError("User tidak ditemukan", 400);
  }

  const isMatchPassword = await bcrypt.compare(user.password, userExist.password);

  if (!isMatchPassword) {
    throw new ResponseError("Password salah", 400);
  }

  const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
  const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

  const data = {
    id: userExist.id,
    username: userExist.username,
    email: userExist.email,
  };

  const access_token = jwt.sign(data, ACCESS_TOKEN_SECRET, { expiresIn: "30s" });
  const refresh_token = jwt.sign(data, REFRESH_TOKEN_SECRET, { expiresIn: "1d" });

  const result = await db.user.update({
    where: {
      id: userExist.id,
    },
    data: {
      refresh_token,
      access_token,
    },
    select: {
      id: true,
      username: true,
      email: true,
      refresh_token: true,
      access_token: true,
    },
  });

  return result;
};
export default {
  register,
  login,
};
