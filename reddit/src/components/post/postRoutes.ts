import { Router } from "express";
import { authMiddleware } from "../../middleware";

import {
  createPost,
  getPosts,
  getPost,
  addCommentsToPost,
} from "./postController";

const router = Router();

router.route("/").post(authMiddleware, createPost).get(getPosts);
router.get("/:identifier/:slug", getPost);
router.post("/:identifier/:slug/comments", authMiddleware, addCommentsToPost);

export default router;
