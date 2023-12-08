import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { publicRouter } from "./routes/public-route.js";
import { errorMiddleware } from "./middleware/error-middleware.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(publicRouter);
app.use(errorMiddleware);

const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
