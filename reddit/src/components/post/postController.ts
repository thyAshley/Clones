import { Request, Response } from "express";
import { Post } from "../../entity/index";
import { stringToSlug } from "./postServices";

export const createPost = async (req: Request, res: Response) => {
  const { title, body, sub } = req.body;
  const user = res.locals.user;
  console.log(stringToSlug("hdsa@324e adsa sa dr"));

  if (title.trim() === "")
    return res.status(400).json({ title: "Title must not be empty" });
  try {
    const post = new Post({
      title,
      body,
      subName: sub,
      user,
    });
    await post.save();
    return res.json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
