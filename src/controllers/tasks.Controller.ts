import { Request, Response } from "express";
import { knex } from "../database/connection";
import { Task } from "../types/types";
interface CustomRequest extends Request {
  userId?: number;
}

export const newTask = async (req: CustomRequest, res: Response) => {
  const { description } = req.body;
  try {
    await knex<Task>("task").insert({
      description,
      createat: new Date(),
      userid: req.userId,
    });

    return res.status(201).json({ message: "Task add successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Erro in new task" });
  }
};
