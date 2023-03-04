import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        senha: {type: String, required: true},
        endereco: {type: String, required: true},
        telefone: {type: String, required: true},
        email: {type: String},
        tipoSanguineo: {type: String, required: true}
    },
    /*SE QUISERMOS REMOVER A VERSION STRING, RETIRAR O COMENTÁRIO.
    {
        versionKey: false
    }*/
)

const usuarios = mongoose.model("usuarios", usuarioSchema)

export default usuarios;