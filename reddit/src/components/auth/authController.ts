import { validate } from "class-validator";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { User } from "../../entity";

export const register = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;
  try {
    let errors: { [key: string]: string } = {};
    const emailUser = await User.findOne({ email });
    const usernameUser = await User.findOne({ username });
    if (emailUser) errors.email = "Email is already taken";
    if (usernameUser) errors.username = "Username is already taken";
    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    }
    const user = new User({ email, password, username });

    let validationError = await validate(user);
    if (validationError.length > 0) {
      return res.status(400).json({ errors });
    }

    await user.save();
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(404)
        .json({ error: "Invalid username and/or username" });
    }
    const matches = await bcrypt.compare(password, user.password);
    if (!matches) {
      return res
        .status(401)
        .json({ error: "Invalid username and/or username" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWTSECRET!
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600,
    });
    return res.json({ user, token });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

export const me = async (req: Request, res: Response) => {
  return res.json(res.locals.user);
};
