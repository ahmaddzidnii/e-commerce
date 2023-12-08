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

export default {
  register,
  login,
};
