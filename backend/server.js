import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';
import path from "path";

const app = express();
const port = process.env.PORT || 3000
const __dirname = path.resolve();

await connectDB()

app.use(express.json())
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true,
}))

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.get('/api', (req, res) => {
  res.send("Api Working")
})


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.use((req, res) => {    // ✅ Use middleware instead of app.get("*")
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

app.listen(port, () => console.log("server started on PORT : " + port));