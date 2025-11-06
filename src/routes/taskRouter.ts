import { Router } from "express";

const routerTask = Router();

routerTask.get("/", () => {console.log("Pegar todas as tarefas")})
routerTask.get("/:id", () => {console.log("Pegar uma tarefa")})
routerTask.post("/", () => {console.log("Cadastrar uma tarefa")})
routerTask.put("/:id", () => {console.log("Atualizar uma tarefa")})
routerTask.delete("/:id", () => {console.log("Deletar uma tarefa")})

export default routerTask;
