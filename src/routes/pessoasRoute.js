import express from "express";
import PessoasController from "../controllers/pessoasController.js";
import paginar from "../middlewares/paginar.js";

const router = express.Router();

router
  .get("/pessoas", PessoasController.listarPessoas, paginar)
  .get("/pessoas/:id", PessoasController.listarPessoaPorId, paginar)
  .post("/pessoas", PessoasController.cadastrarPessoa) 
  .put("/pessoas/:id", PessoasController.atualizarPessoa)
  .delete("/pessoas/:id", PessoasController.excluirPessoa);

export default router;