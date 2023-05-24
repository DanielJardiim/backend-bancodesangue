import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const app = express();

app.use(express.json());

routes(app);

//Middleware para interceptar qualquer erro identificado pela nossa aplicação em toda requisição da nossa API
// eslint-disable-next-line no-unused-vars
app.use((erro, req, res, next) => {
  res.status(500).send({ message: "Erro interno do servidor"});
});

export default app;