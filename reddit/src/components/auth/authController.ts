import { validate } from "class-validator";
import { Request, Response } from "express";
import { User } from "../../entity/User";

export const register = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;

  try {
    const user = new User({ email, password, username });
    const errors = await validate(user);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
    await user.save();
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
