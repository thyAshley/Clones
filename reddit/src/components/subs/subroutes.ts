import { Router } from "express";
import { authMiddleware } from "../../middleware";
import { createSub } from "./subController";

const router = Router();

router.post("/", authMiddleware, createSub);

export default router;
