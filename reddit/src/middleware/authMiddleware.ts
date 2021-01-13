import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { User } from "../entity/User";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      throw new Error("Unauthenticated");
    }
    const { username, id }: any = jwt.verify(token, process.env.JWTSECRET!);
    const user = await User.findOne({ username });
    if (!user) throw new Error("Unauthenticated");
    res.locals.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};
