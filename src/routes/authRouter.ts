import { Router } from "express";
import taskControllers from "../controllers/taskControllers";
import authController from "../controllers/authController";

const routerAuth = Router();

routerAuth.post("/", authController.postLogin);

export default routerAuth;