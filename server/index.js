import express from "express"
import cookieParser from "cookie-parser";
import connectDB from "./database/db.js";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import cors from "cors";
import courseRoute from "./routes/course.route.js";


dotenv.config({});

connectDB();
const app = express();
const PORT = 8080;



app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  // console.log("MONGO_URL:", process.env.MONGO_URL);
});


