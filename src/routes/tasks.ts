import { Router } from "express";
import { validateBody } from "../middlewares/validateBody";
import { schemaNewTask } from "../utils/joi.schema";
import { newTask, updateTask } from "../controllers/tasks.Controller";
import { validateUpdateTask } from "../middlewares/tasks/validateUpdate";

const taskRouter = Router();

taskRouter.post("/task", validateBody(schemaNewTask), newTask);
taskRouter.patch(
  "/task/:id",
  validateBody(schemaNewTask),
  validateUpdateTask,
  updateTask
);

export default taskRouter;
