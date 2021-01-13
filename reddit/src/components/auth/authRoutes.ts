import { Router } from "express";

import { login, register, me, logout } from "./authController";
import { authMiddleware, trimMiddleware } from "../../middleware";

const router = Router();

router.route("/").post(trimMiddleware, register).get(authMiddleware, me);
router.post("/login", trimMiddleware, login);
router.get("/logout", authMiddleware, logout);

export default router;
