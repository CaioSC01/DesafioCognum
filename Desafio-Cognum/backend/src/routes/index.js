import express from "express";
import desafioUm from "./DesafioUm.js";
import desafioDois from "./DesafioDois.js";
import desafioTres from "./DesafioTres.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({ titulo: "Desafio Cognum" });
    });

    app.use(express.json(), desafioUm, desafioDois, desafioTres);
};

export default routes;
