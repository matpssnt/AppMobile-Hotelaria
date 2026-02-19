import { Router } from "express";
import roomController from "../controllers/roomController";

const routerRoom = Router();
routerRoom.post("/", roomController.available);

export default routerRoom;