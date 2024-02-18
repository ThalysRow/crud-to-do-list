import { Router } from "express";
import { validateBody } from "../middlewares/validateBody";
import { schemaNewTask } from "../utils/joi.schema";
import {
  deleteTask,
  findTask,
  listTask,
  newTask,
  updateTask,
} from "../controllers/tasks.Controller";
import { validateUpdateTask } from "../middlewares/tasks/validateUpdate";

const taskRouter = Router();

taskRouter.post("/task", validateBody(schemaNewTask), newTask);

taskRouter.patch(
  "/task/:id",
  validateBody(schemaNewTask),
  validateUpdateTask,
  updateTask
);

taskRouter.delete("/task/:id", validateUpdateTask, deleteTask);
taskRouter.get("/task", listTask)

taskRouter.get("/task/:id", findTask)

export default taskRouter;


