import { ResponseError } from "../error/response-error.js";

const validate = (schema, request) => {
  const result = schema.validate(request);
  if (result.error) {
    throw new ResponseError(result.error.message, 400);
  } else {
    return result.value;
  }
};

export { validate };
