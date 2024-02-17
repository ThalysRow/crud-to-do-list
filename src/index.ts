import express from "express";
import "dotenv/config";
import usersRouter from "./routes/users";
import { authentication } from "./middlewares/authentication";

const app = express();

app.use(express.json());

app.use(usersRouter);

app.use(authentication);

app.listen(process.env.PORT, () => {
  console.log("Running... 😎");
});
