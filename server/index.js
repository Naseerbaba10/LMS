import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./database/db.js";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import cors from "cors";
import courseRoute from "./routes/course.route.js";

dotenv.config();

connectDB();
const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS configuration to allow all origins
app.use(
  cors({
    origin: 'https://lms-1-frontend-2.onrender.com' || ' http://localhost:5173/' , // Allow all origins
    credentials: true, // If you need to include cookies in requests
  })
);

// Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
