import { Router } from "express";
import taskControllers from "../controllers/taskControllers";

const routerTask = Router();

routerTask.get("/", taskControllers.getTasks)
routerTask.get("/:id", taskControllers.getTask)
routerTask.post("/", taskControllers.createTask)
routerTask.put("/:id", taskControllers.updateTask)
routerTask.delete("/:id", taskControllers.deleteTask)

export default routerTask;
