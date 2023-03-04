import usuarios from "../models/Usuario.js";

class UsuarioController {
    static listarUsuarios = (req, res) => {
        usuarios.find((err, usuarios) => {
            res.status(200).json(usuarios);
        })    
    }

    static listarUsuarioPorId = ((req, res) => {
        const id = req.params.id;

        usuarios.findById(id, (err, usuarios) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Usuario não encontrado`})
            } else {
                res.status(200).send(usuarios)
            }
        })

    })

    static cadastrarUsuario = (req, res) => {
        let usuario = new usuarios(req.body);
        usuario.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar Usuario.`})
            } else {
                res.status(201).send(usuario.toJSON())
            }
        })
    }

    static atualizarUsuario = (req, res) => {
        const id = req.params.id;

        usuarios.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Usuario atualizado com sucesso'})
            } else {
                res.status(500).send({message: `${err.message}- falha ao atualizar`})
            }
        })
        
    }

    static excluirUsuario = (req, res) => {
        const id = req.params.id

        usuarios.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Usuario removido com sucesso'})
            } else {
                res.status(500).send({message: `${err.message} - erro ao deletar Usuario`})
            }
        })
    }
    
}

export default UsuarioController;