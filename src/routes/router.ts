import { Router } from "express";
import routerTask from "./taskRouter";
import { createJWT } from "../utils/jwt";

const handlerRouter = Router();

// Public routes
handlerRouter.use("/tasks", routerTask)

handlerRouter.use("/jwt", (req, res) => {
  res.json(createJWT())
})

// Private routes

export default handlerRouter;
