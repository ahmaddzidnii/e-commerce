import userService from "../service/user-service.js";

const register = async (req, res, next) => {
  try {
    const data = await userService.register(req.body);
    res.cookie("token", data.token, { httpOnly: true });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export default {
  register,
};
