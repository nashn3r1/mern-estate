import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

import dotenv from "dotenv";
dotenv.config();

try {
  await mongoose.connect(process.env.MONGODB_URI);

  console.log("MongoDB connected");
} catch (error) {
  console.log(error);
}

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((error, req, res, next) => {
  const statusCode = error?.statusCode || 500;
  const message = error?.message || "Internal Server Error";

  return res.status(statusCode).json({ success: false, statusCode, message });
});
