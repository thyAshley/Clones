import { Router } from "express";
import trim from "../../middleware/trim";

import { login, register, me } from "./authController";

const router = Router();

router.route("/").post(trim, register).get(me);
router.post("/login", trim, login);

export default router;
