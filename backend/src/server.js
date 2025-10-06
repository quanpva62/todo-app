import express from "express";
import taskRoutes from "./routes/tasksRoutes.js";
import { connect } from "mongoose";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 5001;
const _dirname = path.resolve();

const app = express();

app.use(express.json());
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173" })
  );
}

app.use("/api/tasks", taskRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, "../frontend/dist/index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
});
