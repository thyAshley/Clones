import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRouter from "./components/auth/authRoutes";
import postRouter from "./components/post/postRoutes";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/posts", postRouter);

export default app;
