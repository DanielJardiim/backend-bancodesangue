import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
  {
    id: {type: String},
    email: {type: String, required: true},
    senha: {type: String, required: true}    
  },
  /*SE QUISERMOS REMOVER A VERSION STRING, RETIRAR O COMENTÁRIO.
  {
    versionKey: false
  }*/
);

const usuarios = mongoose.model("usuarios", usuarioSchema);

export default usuarios;