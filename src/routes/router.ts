import { Router } from "express";
import { middleware } from "./jwtMiddleware";

import routerAuth from "./authRouter";
import routerRoom from "./roomRouter";
import routerReserve from "./reserveRouter";

const handlerRouter = Router();

// Public routes
handlerRouter.use("/api/login", routerAuth);
handlerRouter.use("/api/roomsAvailable", routerRoom);


// Private routes
handlerRouter.use("/api/reserve", middleware, routerReserve);


export default handlerRouter;
