import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

// Fix for __dirname in ES modules
const __dirname = path.resolve();

// Connect DB
await connectDB();

// Middleware
app.use(express.json());

// CORS (safe for both dev + production)
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    credentials: true,
  })
);

// API routes
app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

// Test route
app.get("/api", (req, res) => {
  res.send("API Working");
});

// ✅ Serve frontend in production (Vite build)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/dist")));

  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "frontend/dist/index.html"));
  });
}

// Start server
app.listen(port, () => {
  console.log("Server started on PORT: " + port);
});