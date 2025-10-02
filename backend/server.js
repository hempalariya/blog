import dotenv from "dotenv";
dotenv.config();
import express from "express";

import connectDB from "./config/db.js";
import authRouter from "./routes/authRoute.js";

const app = express();
connectDB();

app.use(express.json());

app.use("/api/v1/auth", authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
