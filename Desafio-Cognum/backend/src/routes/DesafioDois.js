//estruturando o desafio 01
import EmployeeController from "../controllers/EmployersController.js";
//Importe o express para voce poder usa-lo
import express from "express";
//uma boa pratica para colocar mais informaçoes de CRUD
const router = express.Router();

router
    .get("/employee", EmployeeController.listEmployers)
    .get("/employee/:id", EmployeeController.listEmployersId)
    .post("/employee", EmployeeController.createEmployers)
    .put("/employee/:id", EmployeeController.updateEmployers)
    .delete("/employee/:id", EmployeeController.deleteEmployers);

export default router;
