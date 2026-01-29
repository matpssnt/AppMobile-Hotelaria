import { Router } from "express";
import authController from "../controllers/authController";

const routerAuth = Router();

routerAuth.post("/", authController.postLogin);

export default routerAuth;