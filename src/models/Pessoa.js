import mongoose from "mongoose";

const pessoaSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},    
    endereco: {type: String, required: true},
    telefone: {type: String, required: true},    
    tipoSanguineo: {type: String, required: true}
  },
  /*SE QUISERMOS REMOVER A VERSION STRING, RETIRAR O COMENTÁRIO.
  {
    versionKey: false
  }*/
);

const pessoas = mongoose.model("pessoas", pessoaSchema);

export default pessoas;