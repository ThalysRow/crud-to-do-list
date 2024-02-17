import { knex } from "../database/connection";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { findUserByEmail, formateData } from "../utils/users.functions";

export const newUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const encryptedPassword = await bcrypt.hash(password, 10);
    await knex("users").insert({
      name: formateData(name),
      email,
      password: encryptedPassword,
    });

    const user = await findUserByEmail(email);
    const { password: _, ...Newuser } = user;

    return res.status(201).json(Newuser);
  } catch (error) {
    return res.status(500).json({ message: "Error in create new user" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const user = await findUserByEmail(email);
    const token = jwt.sign({ id: user.id }, process.env.JWT_PASS as string, {
      expiresIn: 30 * 60,
    });

    const { password: _, ...userLogin } = user;
    return res.status(200).json({ userLogin, token });
  } catch (error) {
    return res.status(500).json({ message: "Error in login user" });
  }
};
