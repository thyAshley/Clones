import { Request, Response } from "express";
import { Sub } from "../../entity/Sub";
import { Post } from "../../entity/index";
import { Comment } from "../../entity/Comment";

export const createPost = async (req: Request, res: Response) => {
  const { title, body, sub } = req.body;
  const user = res.locals.user;

  if (title.trim() === "")
    return res.status(400).json({ title: "Title must not be empty" });
  try {
    const subs = await Sub.findOneOrFail({ name: sub.toLowerCase() });

    const post = new Post({
      title,
      body,
      sub: subs,
      user,
      subName: subs.name,
    });
    await post.save();
    return res.json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({
      order: { createdAt: "DESC" },
    });
    return res.json(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

export const getPost = async (req: Request, res: Response) => {
  const { identifier, slug } = req.params;
  try {
    const post = await Post.findOneOrFail(
      {
        identifier,
        slug,
      },
      {
        relations: ["sub"],
      }
    );
    return res.json(post);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Post not found!" });
  }
};

export const addCommentsToPost = async (req: Request, res: Response) => {
  const body = req.body.body as string;
  if (!body) {
    return res.status(400).json({ error: "Missing content" });
  }
  const { identifier, slug } = req.params;
  try {
    const post = await Post.findOneOrFail({ identifier, slug });
    console.log(post);
    const comment = new Comment({
      body: body || "",
      user: res.locals.user,
      post,
    });
    await comment.save();
    return res.json(comment);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Post not found" });
  }
};
