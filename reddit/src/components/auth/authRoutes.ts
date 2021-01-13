import express, { Router } from "express";
import trim from "../../middleware/trim";

import { login, register } from "./authController";

const router = express.Router();

router.post("/", trim, register);
router.post("/login", trim, login);

export default router;
