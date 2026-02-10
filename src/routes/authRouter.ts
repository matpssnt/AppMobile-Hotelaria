import { Router } from "express";
import authController from "../controllers/authController";

const routerAuth = Router();

routerAuth.post("/", authController.postLogin);
routerAuth.post("/register", authController.postRegister);

export default routerAuth;