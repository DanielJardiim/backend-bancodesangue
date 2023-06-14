import NaoEncontrado from "../erros/NaoEncontrado.js";
import { pessoas } from "../models/index.js";

var numAmais = 0;
var numAmenos = 0;
var numBmais = 0;
var numBmenos = 0;
var numABmais = 0;
var numABmenos = 0;
var numOmais = 0;
var numOmenos = 0;

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

      const pessoaResultado = await pessoa.save();

      if (pessoa.tipoSanguineo === "A+") {
        const Amais = ((++numAmais / 1000) * 100).toFixed(2);
        const tipoSanguineo = "A+";
        return res
          .status(201)
          .json({ tipoSanguineo, valor: Amais });
      }
      if (pessoa.tipoSanguineo === "A-") {
        const Amenos = ((++numAmenos / 1000) * 100).toFixed(2);
        const tipoSanguineo = "A-";
        return res
          .status(201)
          .json({ tipoSanguineo, valor: Amenos });
      }
      if (pessoa.tipoSanguineo === "B+") {
        const Bmais = ((++numBmais / 1000) * 100).toFixed(2);
        const tipoSanguineo = "B+";
        return res
          .status(201)
          .json({ tipoSanguineo, valor: Bmais });
      }
      if (pessoa.tipoSanguineo === "B-") {
        const Bmenos = ((++numBmenos / 1000) * 100).toFixed(2);
        const tipoSanguineo = "B-";
        return res
          .status(201)
          .json({ tipoSanguineo, valor: Bmenos });
      }
      if (pessoa.tipoSanguineo === "AB+") {
        const ABmais = ((++numABmais / 1000) * 100).toFixed(2);
        const tipoSanguineo = "AB+";
        return res
          .status(201)
          .json({ tipoSanguineo, valor: ABmais });
      }
      if (pessoa.tipoSanguineo === "AB-") {
        const ABmenos = ((++numABmenos/ 1000) * 100).toFixed(2);
        const tipoSanguineo = "AB-";
        return res
          .status(201)
          .json({ tipoSanguineo, valor: ABmenos });
      }
      if (pessoa.tipoSanguineo === "O+") {
        const Omais = ((++numOmais / 1000) * 100).toFixed(2);
        const tipoSanguineo = "O+";
        return res
          .status(201)
          .json({ tipoSanguineo, valor: Omais });
      }
      if (pessoa.tipoSanguineo === "O-") {
        const Omenos = ((++numOmenos / 1000) * 100).toFixed(2);
        const tipoSanguineo = "O-";
        return res
          .status(201)
          .json({ tipoSanguineo, valor: Omenos });
      }

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