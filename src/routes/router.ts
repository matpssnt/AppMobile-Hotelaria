import { Router } from "express";
import { middleware } from "./jwtMiddleware";
import { createJWT } from "../utils/jwt";

import routerTask from "./taskRouter";
import routerAuth from "./authRouter";
import routerRoom from "./roomRouter";
import routerReserve from "./reserveRouter";

const handlerRouter = Router();

// Public routes
handlerRouter.use("/tasks", routerTask);
handlerRouter.use("/api/login", routerAuth);
handlerRouter.use("/api/quartosDisponiveis", routerRoom);


// Private routes
handlerRouter.use("/api/reservas", middleware, routerReserve);


handlerRouter.use("/jwt", (req, res) => {
  const payload = {
    id: 123,
    name: "fulano",
    roles: "cliente"
  }
  res.json(createJWT(payload))
})

handlerRouter.get("/jwtest", middleware, (req, res) => {
  res.json("passou pelo JWT middleware")
})

export default handlerRouter;
