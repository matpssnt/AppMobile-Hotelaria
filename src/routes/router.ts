import { Router } from "express";
import routerTask from "./taskRouter";
import { createJWT } from "../utils/jwt";
import { middleware } from "./jwtMiddleware";

const handlerRouter = Router();

// Public routes
handlerRouter.use("/tasks", routerTask)

handlerRouter.use("/jwt", (req, res) => {
  const payload = {
    id: 123,
    name: "fulano",
    roles: "cliente"
  }
  res.json(createJWT(payload))
})

// Private routes

handlerRouter.get("/jwtest", middleware, (req, res) => {
  res.json("passou pelo JWT middleware")
})

export default handlerRouter;
