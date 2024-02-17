import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { findUserById } from "../utils/users.functions";

interface CustomRequest extends Request {
  userId?: number;
}

export const authentication = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const token = authorization.split(" ")[1];

    const user = jwt.verify(
      token,
      process.env.JWT_PASS as string
    ) as JwtPayload;
    req.userId = user.id;

    const findUser = await findUserById(req.userId as number);

    if (!findUser) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: "Erro in authentication" });
  }
};
