//Arquivo para receber as funções de autenticação
//importando secret do dotenv
import "dotenv/config.js";
//importando db
import { usuarios } from "../models/index.js";
//importando bcrypt para comparar hash da senha
import bcrypt from "bcryptjs";
//importando biblioteca para gerar JWT
import jwt from "jsonwebtoken";

class AuthService {
  //Criando função para fazer login
  async login(dto) {
    const usuario = await usuarios.findOne({
      email: dto.email
    });

    if(!usuario) {
      throw new Error("Usuario não cadastrado");
    }

    const senhasIguais = await bcrypt.compare(dto.senha, usuario.senha);

    if(!senhasIguais) {
      throw new Error("Usuario ou Senha incorreta");
    }

    //Criando JWT
    //Parametros: payload, secret(codigo unico do projeto), option(tempo de expiração, etc)
    //utilizando site md5.cz, geraremos um secret atraves da palavra seguranca e copiar o hash gerado
    //Ficara armazenado em config/jsonSecret.js mas deve ser feito em um .env
    const accessToken = jwt.sign({
      id: usuario.id,
      email: usuario.email,
    }, process.env.TOKEN_SECRET, {
      //1 dia em segundos
      expiresIn: 86400
    });

    return { accessToken };
  }
}

export default AuthService;