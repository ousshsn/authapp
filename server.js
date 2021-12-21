import express from "express";
import dotenv from "dotenv";
import mainRouter from "./routes/mainRouter.js";
import mongoose from "mongoose";
import usersRouter from "./routes/usersRouter.js";
const HOST = '0.0.0.0';
dotenv.config();
const port = process.env.PORT
let database = process.env.MONGO_URI;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/", mainRouter);
app.use("/users", usersRouter);

app.listen(port,HOST, () => {
    console.log(`Server is running on port${HOST}:${port}.`);
  });

if (process.env.NODE_ENV === "testing") {
    database = process.env.MONGO_URI_TEST;
  }
mongoose
  .connect(database, {
  })
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.error(`ERROR: ${err}`);
 }); 

export default app;

