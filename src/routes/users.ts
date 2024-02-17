import { Router } from "express";
import { loginUser, newUser } from "../controllers/users.Controller";
import { validateBody } from "../middlewares/validateBody";
import { scheamaLoginUser, schemaNewUser } from "../utils/joi.schema";
import {
  validateLoginUser,
  validateNewUser,
} from "../middlewares/users/validateUsers";

const usersRouter = Router();

usersRouter.post(
  "/user",
  validateBody(schemaNewUser),
  validateNewUser,
  newUser
);

usersRouter.post(
  "/login",
  validateBody(scheamaLoginUser),
  validateLoginUser,
  loginUser
);

export default usersRouter;
