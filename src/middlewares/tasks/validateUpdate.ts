import { Request, Response, NextFunction } from "express";
import { knex } from "../../database/connection";
import { findTaskById } from "../../utils/tasks.functions";
interface CustomRequest extends Request {
  userId?: number;
}

export const validateUpdateTask = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const task = await findTaskById(Number(id));
    if (!task || task.userid !== req.userId) {
      return res.status(404).json({ message: "Task not found" });
    }

    next();
  } catch (error) {
    return res.status(400).json({ message: "Erro in validate update task" });
  }
};
