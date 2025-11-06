import express from "express";
import { Request, Response, NextFunction } from "express";

const app = express();
app.use(express.json());

app.get(
  "/parametro/:nome", (req: Request, res: Response, next: NextFunction) => {
    const nome = req.params.nome;
    console.log("Rota de parametro - Cliente digitou:", nome);
    res.send(`Voc}e digitou o nome: ${nome}`);
  },
);

app.get("/query", (req: Request, res: Response, next: NextFunction) => {
  const nome = req.query.nome;
  res.send(`Você digitou o nome: ${nome}`);
  console.log("Cliente digitou:", nome);
});

app.get("/corpo", (req: Request, res: Response, next: NextFunction) => {
  const nome = req.body.nome;
  console.log("Váriavel dentro do corpo - Cliente digitado", nome);
  res.send(`Variável dentro do corpo: ${nome}`);
});

app.get("/exemplo", (req: Request, res: Response, next: NextFunction) => {
  console.log("Aconteceu algo!");
  res.send("Rodou tudo serto!");
});

// //Rota genérica
// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.send("Hello, world!");
// });

// //Rota de erro
// app.use((err:Error, req: Request, res: Response, next: NextFunction) => {
//   console.log(err);
//   res.status(500).send("Erro na requisão");
// });

export default app;
