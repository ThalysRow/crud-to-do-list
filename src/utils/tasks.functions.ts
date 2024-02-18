import { knex } from "../database/connection";
import { Task } from "../types/types";

export const findTaskById = async (id: number): Promise<Task | undefined> => {
  const task = await knex<Task>("task").where("id", id).first();
  return task;
};
