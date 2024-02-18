import express from "express";
import "dotenv/config";
import usersRouter from "./routes/users";
import { authentication } from "./middlewares/authentication";
import taskRouter from "./routes/tasks";

const app = express();

app.use(express.json());

app.use(usersRouter);

app.use(authentication);

app.use(taskRouter);

app.listen(process.env.PORT, () => {
  console.log("Running... 😎");
});
