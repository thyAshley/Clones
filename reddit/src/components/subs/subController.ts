import { isEmpty } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../entity";
import { Sub } from "../../entity/Sub";

export const createSub = async (req: Request, res: Response) => {
  const { name, title, description } = req.body;

  const user: User = res.locals.user;

  try {
    let errors: { [key: string]: string } = {};
    if (isEmpty(name)) errors.name = "Name must not be empty";
    if (isEmpty(title)) errors.title = "Title must not be empty";
    if (isEmpty(description))
      errors.description = "Description must not be empty";

    const existingSub = await getRepository(Sub)
      .createQueryBuilder("subs")
      .where("subs.name = :name", { name: name.toLowerCase() })
      .getOne();

    if (existingSub) errors.name = "Sub already exists";
    if (Object.keys(errors).length > 0) throw errors;

    const sub = new Sub({
      name,
      description,
      title,
      user,
    });

    await sub.save();
    return res.json(sub);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
