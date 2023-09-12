import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        name: {
            type: String,
            require: [true, "O nome do(a) Funcionario(a) é obrigatório"],
        },
        role: { type: String },
    },
    {
        versionKey: false,
    }
);

const employers = mongoose.model("employee", employeeSchema);

export default employers;
