import express from "express";
import desafioUm from "./DesafioUm.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({ titulo: "Desafio Cognum" });
    });

    app.use(express.json(), desafioUm);
};

export default routes;
