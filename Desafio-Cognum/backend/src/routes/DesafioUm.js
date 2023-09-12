//estruturando o desafio 01
//Importe o express para voce poder usa-lo
import express from "express";
//uma boa pratica para colocar mais informaçoes de CRUD
const router = express.Router();

router.get("/hello", (req, res) => {
    res.json({ message: "Hello, Cognum" });
});

export default router;
