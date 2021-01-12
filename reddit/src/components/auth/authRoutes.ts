import express, { Router } from "express";

import { register } from "./authController";

const router = express.Router();

router.post("/", register);

export default router;
