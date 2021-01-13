import { Router } from "express";
import { authMiddleware } from "../../middleware";

import { createPost, getPosts, getPost } from "./postController";

const router = Router();

router.route("/").post(authMiddleware, createPost).get(getPosts);
router.get("/:identifier/:slug", getPost);

export default router;
