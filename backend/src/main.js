import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { publicRouter } from "./routes/public-route.js";
import { errorMiddleware } from "./middleware/error-middleware.js";
import { userRouter } from "./routes/user-route.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(publicRouter);
app.use(userRouter);
app.use(errorMiddleware);

const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
