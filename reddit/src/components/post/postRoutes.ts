import { Router } from "express";
import { authMiddleware } from "../../middleware";

import { createPost } from "./postController";

const router = Router();

router.route("/").post(authMiddleware, createPost);

export default router;
