import { Request, Response } from "express";
import { knex } from "../database/connection";
import { Task } from "../types/types";
import { findTaskById } from "../utils/tasks.functions";
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

export const updateTask = async (req: CustomRequest, res: Response) => {
  const { description } = req.body;
  const { id } = req.params;

  try {
    await knex<Task>("task").update({ description }).where("id", id);
    return res.status(204).json();
  } catch (error) {
    return res.status(400).json({ message: "Erro in update task" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await knex<Task>("task").where("id", id).delete();

    return res.status(204).json({});
  } catch (error) {
    return res.status(400).json({ message: "Erro in delete task" });
  }
};

export const listTasks = async (req: CustomRequest, res: Response) => {
  try {
    const tasks = await knex<Task>("task").where("userid", req.userId);
    return res.json({ tasks });
  } catch (error) {
    return res.status(400).json({ message: "Error in listing tasks" });
  }
};

export const findTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const task = await findTaskById(Number(id));
    return res.json({ task });
  } catch (error) {
    return res.status(400).json({ message: "Error in searching for task" });
  }
};
