import express from "express";
import pessoas from "./pessoasRoute.js";
import usuarios from "./usuariosRoute.js";
import auth from "./authRoute.js";

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