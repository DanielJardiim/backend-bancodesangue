import usuarios from "../models/Usuario.js";

class UsuarioController {
  static listarUsuarios = async (req, res) => {
    
    try {
      const usuariosResultado = await usuarios.find();
      
      res.status(200).json(usuariosResultado);      
    } catch (error) {
      res.status(500).json({ message: "Erro interno no servidor "});
    }
  };

  static listarUsuarioPorId = (async (req, res) => {
    
    try {
      const id = req.params.id;

      const usuarioResultado = await usuarios.findById(id);

      res.status(200).send(usuarioResultado);
    } catch (error) {
      res.status(400).send({message: `${error.message} - Usuario não encontrado`});
    }   

  });

  static cadastrarUsuario = async (req, res) => {
    
    try {
      let usuario = new usuarios(req.body);

      const usuarioResultado = await usuarios.save(usuario);

      res.status(201).send(usuarioResultado.toJSON());      
    } catch (error) {
      res.status(500).send({message: `${error.message} - falha ao cadastrar Usuario.`});
    }   
    
  };

  static atualizarUsuario = async (req, res) => {
    
    try {
      const id = req.params.id;

      await usuarios.findByIdAndUpdate(id, {$set: req.body});
      
      res.status(200).send({message: "Usuario atualizado com sucesso"});
    } catch (error) {
      res.status(500).send({message: `${error.message}- falha ao atualizar`});
    }
        
  };

  static excluirUsuario = async (req, res) => {
    
    try {
      const id = req.params.id;

      await usuarios.findByIdAndDelete(id);

      res.status(200).send({message: "Usuario removido com sucesso"});      
    } catch (error) {
      res.status(500).send({message: `${error.message} - erro ao deletar Usuario`});
    }
    
  };
    
}

export default UsuarioController;