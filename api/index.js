import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

try {
  await mongoose.connect(process.env.MONGODB_URI, {
    //dbName: "share_prompt",
    useNewURLParser: true,
    useUnifiedTopology: true,
  });

  console.log("MongoDB connected");
} catch (error) {
  console.log(error);
}

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
