import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRouter from "./components/auth/authRoutes";
import postRouter from "./components/post/postRoutes";
import subRouter from "./components/subs/subRoutes";
import voteRouter from "./components/vote/voteRoutes";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200,
  })
);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/subs", subRouter);
app.use("/api/v1/vote", voteRouter);

export default app;
