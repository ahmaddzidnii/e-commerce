import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import { publicRouter } from "./src/routes/public-route.js";
import { errorMiddleware } from "./src/middleware/error-middleware.js";
import { userRouter } from "./src/routes/user-route.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Serve static files globally
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.use(publicRouter);
app.use(userRouter);
app.use(errorMiddleware);

const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
