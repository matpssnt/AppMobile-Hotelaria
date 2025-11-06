import express from "express";
import { Request, Response, NextFunction } from "express";
import router from "./routes/taskRouter";

const app = express();
app.use(express.json());
app.use("/tasks", router);


export default app;
