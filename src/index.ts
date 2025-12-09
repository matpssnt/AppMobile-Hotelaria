import dotenv from "dotenv";
import app from "./app";

dotenv.config()
console.log(process.env.JWT_SECRET)
const PORT = Number(process.env.PORT);

app.listen(PORT, () => console.log(`Servidor está rodando: ${PORT}`));
