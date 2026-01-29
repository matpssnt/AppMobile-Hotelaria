import { Router } from "express";
import routerTask from "./taskRouter";
import routerAuth from "./authRouter";
import { middleware } from "./jwtMiddleware";
import { createJWT } from "../utils/jwt";

const handlerRouter = Router();

// Public routes
handlerRouter.use("/tasks", routerTask)
handlerRouter.use("/api/login", routerAuth)

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
