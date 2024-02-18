import { Request, Response, NextFunction } from "express";
import { findUserByEmail } from "../../utils/users.functions";
import bcrypt from "bcrypt";

export const validateNewUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  try {
    const userFind = await findUserByEmail(email);

    if (userFind) {
      return res.status(400).json({ message: "email already in use" });
    }

    next();
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Erro in validate new user" });
  }
};

export const validateLoginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(400).json({ message: "invalid email or password" });
    }

    const pass = user.password;

    const validatePassword = await bcrypt.compare(password, pass);

    if (!validatePassword) {
      return res.status(400).json({ message: "invalid email or password" });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: "Erro in validate login user" });
  }
};
