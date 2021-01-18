import { Router } from "express";
import { authMiddleware } from "../../middleware";
import { vote } from "./voteController";

const router = Router();

router.post("/", authMiddleware, vote);

export default router;
