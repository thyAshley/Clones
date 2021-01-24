import { Request, Response, Router } from "express";
import { isEmpty } from "class-validator";
import { getRepository } from "typeorm";
import fs from "fs";
import path from "path";

import User from "../entities/User";
import Sub from "../entities/Sub";
import auth from "../middleware/auth";
import user from "../middleware/user";
import Post from "../entities/Post";
import { uploadMiddleware } from "../middleware/upload";
import ownSub from "../middleware/ownSub";

const createSub = async (req: Request, res: Response) => {
  const { name, title, description } = req.body;

  const user: User = res.locals.user;

  try {
    let errors: any = {};
    if (isEmpty(name)) errors.name = "Name must not be empty";
    if (isEmpty(title)) errors.title = "Title must not be empty";

    const sub = await getRepository(Sub)
      .createQueryBuilder("sub")
      .where("lower(sub.name) = :name", { name: name.toLowerCase() })
      .getOne();

    if (sub) errors.name = "Sub exists already";

    if (Object.keys(errors).length > 0) {
      throw errors;
    }
  } catch (err) {
    return res.status(400).json(err);
  }

  try {
    const sub = new Sub({ name, description, title, user });
    await sub.save();

    return res.json(sub);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const getSub = async (req: Request, res: Response) => {
  const name = req.params.subName;
  try {
    const sub = await Sub.findOneOrFail({ name: name });
    const posts = await Post.find({
      where: { subName: name },
      order: { createdAt: "DESC" },
      relations: ["comments", "votes"],
    });

    sub.posts = posts;

    if (res.locals.user) {
      sub.posts.forEach((p) => p.setUserVote(res.locals.user));
    }
    return res.json(sub);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Something went wrong" });
  }
};

const uploadSubImage = async (req: Request, res: Response) => {
  const sub: Sub = res.locals.sub;
  try {
    const type = req.body.type;

    if (!["image", "banner"].includes(type)) {
      fs.unlinkSync(req.file.path);
      return res.status(400).json({ error: "invalid type" });
    }
    let oldImageUrn: string = "";
    if (type === "image") {
      oldImageUrn = sub.imageUrn || "";
      sub.imageUrn = req.file.filename;
    } else {
      oldImageUrn = sub.bannerUrn || "";
      sub.bannerUrn = req.file.filename;
    }
    await sub.save();
    console.log("the old image urn: ", oldImageUrn);
    if (oldImageUrn) {
      fs.unlinkSync(
        path.join(__dirname, "..", "..", "public", "images", oldImageUrn)
      );
    }

    return res.json(sub);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const router = Router();

router.post("/", user, auth, createSub);
router.get("/:subName", user, getSub);
router.post(
  "/:subName/image",
  user,
  auth,
  ownSub,
  uploadMiddleware.single("file"),
  uploadSubImage
);

export default router;
