import express from "express";
import UsuarioController from "../controllers/usuariosController.js";
import paginar from "../middlewares/paginar.js";
import autenticado from "../middlewares/autenticado.js";

const router = express.Router();

//Para usar nossa middleware nas nossas rotas
router.use(autenticado);

router
  .get("/usuarios", UsuarioController.listarUsuario, paginar)
  .get("/usuarios/:id", UsuarioController.listarUsuarioPorId, paginar)
  .post("/usuarios", UsuarioController.cadastrarUsuario) 
  .put("/usuarios/:id", UsuarioController.atualizarUsuario)
  .delete("/usuarios/:id", UsuarioController.excluirUsuario);

export default router;