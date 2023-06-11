import express from "express";
import auth from "./authRoute.js";
import pessoas from "./pessoasRoute.js";
import usuarios from "./usuariosRoute.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({titulo: "Curso de Node"});
  });

  app.use(
    express.json(),
    auth,           
    pessoas,
    usuarios
  );
};

export default routes;