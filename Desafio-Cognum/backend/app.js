import express from "express";
import db from "./src/db/db.connect.js";
import routes from "./src/routes/index.js";

db.on("error", console.log.bind(console));
db.once("open", () => {
    console.log("Conexão com Banco de dados feita com sucesso");
});

const app = express();
app.use(express.json());
routes(app);

export default app;
