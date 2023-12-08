import { ResponseError } from "../error/response-error.js";

const errorMiddleware = async (error, req, res, next) => {
  if (!error) {
    next();
  }
  if (error instanceof ResponseError) {
    res
      .status(error.status)
      .json({
        code: error.status,
        errors: error.message,
      })
      .end();
  } else {
    return res.status(500).json({
      code: 500,
      errors: "Internal server error",
    });
  }
};

export { errorMiddleware };
