import express from "express";
import PessoasController from "../controllers/pessoasController.js";
import paginar from "../middlewares/paginar.js";

const router = express.Router();

router
  .get("/doadores", PessoasController.listarPessoas, paginar)
  .get("/doadores/:id", PessoasController.listarPessoaPorId, paginar)
  .post("/doadores", PessoasController.cadastrarPessoa) 
  .put("/doadores/:id", PessoasController.atualizarPessoa)
  .delete("/doadores/:id", PessoasController.excluirPessoa);

export default router;