import NaoEncontrado from "../erros/NaoEncontrado.js";
import { usuarios } from "../models/index.js";

class UsuarioController {
  static listarUsuarios = async (req, res, next) => {
    
    try {
      const usuariosResultado = await usuarios.find();
      
      req.resultado = usuariosResultado;
      
      next();
    } catch (error) {
      next(error);
    }
  };

  static listarUsuarioPorId = (async (req, res, next) => {
    
    try {
      const id = req.params.id;

      const usuariosPorIDResultado = await usuarios.findById(id);

      if (usuariosPorIDResultado) {
        res.status(200).send(usuariosPorIDResultado);
      } else {
        next(new NaoEncontrado("Id do Usuario não encontrado"));
      }
      
    } catch (error) {
      next(error);
    }   

  });

  static cadastrarUsuario = async (req, res, next) => {
    
    try {
      let usuario = new usuarios(req.body);

      const usuarioResultado = await usuarios.save(usuario);

      res.status(201).send(usuarioResultado.toJSON());      
    } catch (error) {
      next(error);
    }   
    
  };

  static atualizarUsuario = async (req, res, next) => {
    
    try {
      const id = req.params.id;

      const usuarioResultado = await usuarios.findByIdAndUpdate(id, {$set: req.body});

      if (usuarioResultado !== null) {
        res.status(200).send({message: "Usuario atualizado com sucesso"});
      } else {
        next(new NaoEncontrado("Id do Usuario não localizado"));
      }      
    } catch (error) {
      next(error);
    }
        
  };

  static excluirUsuario = async (req, res, next) => {
    
    try {
      const id = req.params.id;

      const usuarioResultado = await usuarios.findByIdAndDelete(id);

      if(usuarioResultado !== null) {
        res.status(200).send({message: "Usuario removido com sucesso"});
      } else {
        next(new NaoEncontrado("Id do Usuario não localizado"));
      }

    } catch (error) {
      next(error);
    }
    
  };
    
}

export default UsuarioController;