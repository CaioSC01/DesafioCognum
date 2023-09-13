import employers from "../models/Employee.js";

class EmployeeController {
    static async listEmployers(req, res) {
        try {
            const resultEmployers = await employers.find({});
            res.status(200).json(resultEmployers);
        } catch (error) {
            res.status(500).json({ message: "Erro interno no servidor" });
        }
    }
    static async listEmployersId(req, res) {
        try {
            const id = req.params.id;
            const resultEmployers = await employers.findById(id);
            if (resultEmployers != null) {
                res.status(200).json(resultEmployers);
            } else {
                console.log("ID funcionario não encontrado");
            }
        } catch (error) {
            res.status(500).json({ message: "Erro interno no servidor" });
        }
    }
    static async createEmployers(req, res) {
        try {
            let employee = new employers(req.body);
            if (employee.name != "" && employee.role != "") {
                const resultEmployers = await employee.save();
                if (res == undefined) return resultEmployers;
                else return res.status(200).json(resultEmployers.toJSON());
            } else {
                const errorMessage = "Erro: Dados informados erroneamente";
                if (res == undefined)
                    return {
                        message: errorMessage,
                    };
                else {
                    return res.status(400).json({
                        message: errorMessage,
                    });
                }
            }
        } catch (error) {
            res.status(500).json({ message: "Erro interno no servidor" });
        }
    }
    static async updateEmployers(req, res) {
        try {
            const id = req.params.id;
            const resultEmployers = await employers.findByIdAndUpdate(id, {
                $set: req.body,
            });

            if (resultEmployers != null) {
                res.status(200).send({
                    message: "Funcionario atualizado",
                });
            } else {
                console.log("ID funcionario não encontrado");
            }
        } catch (error) {
            res.status(500).json({ message: "Erro interno no servidor" });
        }
    }
    static async deleteEmployers(req, res) {
        try {
            const id = req.params.id;
            const resultEmployers = await employers.findByIdAndDelete(id);

            if (resultEmployers != null) {
                res.status(200).send({
                    message: "Funcionario Removido com sucesso",
                });
            } else {
                console.log("ID funcionario não encontrado");
            }
        } catch (error) {
            res.status(500).json({ message: "Erro interno no servidor" });
        }
    }
}
export default EmployeeController;
