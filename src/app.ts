import express from "express";
import { Request, Response, NextFunction } from "express";

const app = express();

//Rota genérica
app.use((req: Request, res: Response, next: NextFunction) => {
  res.send("Hello, world!");
});

//Rota de erro
app.use((err:Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(500).send("Erro na requisão");
});

export default app;
