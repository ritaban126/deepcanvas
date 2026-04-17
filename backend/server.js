import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';
import path from "path";

// App Config
const app = express();
const port = process.env.PORT || 3000
const __dirname = path.resolve();

// Connect to database first
await connectDB()

// Middlewares
app.use(express.json())
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true,
}))

// App routes
app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

// Change health check from '/' to '/api'
app.get('/api', (req, res) => {
  res.send("Api Working")
})

// Production - serve frontend (must be LAST)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

app.listen(port, () => console.log("server started on PORT : " + port));