//Middleware para validar o token
//Vai receber a requisição, resposta ao usuario e o next do JWT (continuando o processo da requisição)
import "dotenv/config.js";
//Importando verificador do token e //IMportando função para decodificar JWT
import jwt from "jsonwebtoken";

export default async(req, res, next) => {
  //Recebendo o token
  const token = req.headers.authorization;

  //Validando se o token ta sendo passado
  if(!token) {
    return res.status(401).send("Access token não informado");
  }

  //Verificando se o token é valido. Pegando o elemento apos o bareer do token
  const [, accessToken] = token.split(" ");

  try {
    //verifica se o token possui nosso secret ou se está expirado
    jwt.verify(accessToken,process.env.TOKEN_SECRET);

    //Pega o token e traduz as informações que precisamos dele (id e email do usuario)
    const {id, email} = await jwt.decode(accessToken);

    //Adicionando id e email na requisição para sabermos qual usuario esta realizando esta requisição
    req.usuarioId = id;
    req.usuarioEmail = email;

    //Tudo validade, continuando a requisição
    return next();

  } catch (error) {
    res.status(401).send("Usuario não autorizado");
  }
};