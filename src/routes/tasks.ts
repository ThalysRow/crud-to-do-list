import { Router } from "express";
import { validateBody } from "../middlewares/validateBody";
import { schemaNewTask } from "../utils/joi.schema";
import { newTask } from "../controllers/tasks.Controller";

const taskRouter = Router();

taskRouter.post("/task", validateBody(schemaNewTask), newTask);

export default taskRouter;
