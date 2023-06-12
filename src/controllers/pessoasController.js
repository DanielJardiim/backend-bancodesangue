import NaoEncontrado from "../erros/NaoEncontrado.js";
import { pessoas } from "../models/index.js";

class PessoaController {
  static listarPessoas = async (req, res, next) => {
    
    try {
      pessoas.find((err, autores) => {
        res.status(200).json(autores);
      });   
    } catch (error) {
      next(error);
    }
  };

  static listarPessoaPorId = (async (req, res, next) => {
    
    try {
      const id = req.params.id;

      const pessoasPorIDResultado = await pessoas.findById(id);

      if (pessoasPorIDResultado) {
        res.status(200).send(pessoasPorIDResultado);
      } else {
        next(new NaoEncontrado("Id do pessoa não encontrado"));
      }
      
    } catch (error) {
      next(error);
    }   

  });

  static cadastrarPessoa = async (req, res, next) => {
    
    try {
      let pessoa = new pessoas(req.body);

      const pessoaResultado = await pessoas.save(pessoa);

      res.status(201).send(pessoaResultado.toJSON());      
    } catch (error) {
      next(error);
    }   
    
  };

  static atualizarPessoa = async (req, res, next) => {
    
    try {
      const id = req.params.id;

      const pessoaResultado = await pessoas.findByIdAndUpdate(id, {$set: req.body});

      if (pessoaResultado !== null) {
        res.status(200).send({message: "Pessoa atualizado com sucesso"});
      } else {
        next(new NaoEncontrado("Id da Pessoa não localizado"));
      }      
    } catch (error) {
      next(error);
    }
        
  };

  static excluirPessoa = async (req, res, next) => {
    
    try {
      const id = req.params.id;

      const pessoaResultado = await pessoas.findByIdAndDelete(id);

      if(pessoaResultado !== null) {
        res.status(200).send({message: "pessoa removido com sucesso"});
      } else {
        next(new NaoEncontrado("Id do pessoa não localizado"));
      }

    } catch (error) {
      next(error);
    }
    
  };
    
}

export default PessoaController;