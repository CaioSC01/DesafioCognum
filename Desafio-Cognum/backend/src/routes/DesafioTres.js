import express from "express";
import axios from "axios";
// import employers from "../models/Employee.js";
import EmployeeController from "../controllers/EmployersController.js";
// import employers from "../models/Employee";
const router = express.Router();

// Rota para buscar e inserir usuários aleatórios
router.get("/populate", async (req, res) => {
    try {
        // Fazer uma solicitação à API Random User Generator para obter 10 usuários
        const response = await axios.get(
            "https://randomuser.me/api/?results=10"
        );
        const users = response.data.results;
        let employee;
        const newEmployee = [];
        var i = 0;
        while (i <= 9) {
            const usuarios = {
                body: {
                    name: users[i].name.first + " " + users[i].name.last,
                    role: users[i].location.country,
                },
            };
            console.log(i + "\n" + usuarios);
            employee = await EmployeeController.createEmployers(usuarios);

            newEmployee.push(employee); // Adicione o retorno ao array

            i++;
        }
        console.log("teste" + newEmployee.length);
        res.json(newEmployee);
        // res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar Usuarios" });
    }
});

export default router;
