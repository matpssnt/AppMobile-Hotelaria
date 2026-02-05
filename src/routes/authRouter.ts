import { Router } from "express";
import authController from "../controllers/authController";
import registerController from "../controllers/registerController";

const routerAuth = Router();

routerAuth.post("/", authController.postLogin);
routerAuth.post("/register", registerController.postRegister)

export default routerAuth;