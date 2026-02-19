import { Router } from "express";
import reserveController from "../controllers/reserveController";

const routerReserve = Router();
routerReserve.post("/", reserveController.createOrder);

export default routerReserve;