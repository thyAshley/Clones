import { NextFunction, Request, Response } from "express";
import User from "../entities/User";
import Sub from "../entities/Sub";

export default async (req: Request, res: Response, next: NextFunction) => {
  const user: User = res.locals.user;

  try {
    const sub = await Sub.findOneOrFail({
      where: { name: req.params.subName },
    });
    if (sub.username !== user.username) {
      return res.status(403).json({ error: `You don't own this sub` });
    }
    res.locals.sub = sub;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
