import { db } from "../../lib/db.js";
import userService from "../service/user-service.js";

const register = async (req, res, next) => {
  try {
    const data = await userService.register(req.body);
    res.cookie("refresh_token", data.refresh_token, { httpOnly: true, maxAge: 60 * 60 * 24 * 1000 });
    res.status(201).json({ accses_token: data.access_token });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const data = await userService.login(req.body);
    res.cookie("refresh_token", data.refresh_token, { httpOnly: true, maxAge: 60 * 60 * 24 * 1000 });
    return res.status(200).json({ accses_token: data.access_token });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    const cookies = req.cookies;
    const refresh_token = cookies?.refresh_token;
    if (!refresh_token) {
      res.status(401).json({ message: "Unauthorized" });
    }

    const user = await db.user.findMany({
      where: {
        refresh_token,
      },
    });

    if (!user[0]) return res.sendStatus(204);

    await db.user.update({
      where: {
        id: user[0].id,
      },
      data: {
        refresh_token: null,
        access_token: null,
      },
    });

    res.clearCookie("refresh_token");
    return res.status(200).json({ message: "Berhasil Logout!" }).end();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default {
  register,
  login,
  logout,
};
