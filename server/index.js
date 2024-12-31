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

// CORS configuration
const allowedOrigins = [
  "https://lms-cgz0.onrender.com",
  "https://lms-1-frontend-2.onrender.com"
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
