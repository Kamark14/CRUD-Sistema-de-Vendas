import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import VendaMensal from "./VendaMensal.js";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

const connetDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB conectado com sucesso!");
    } catch (error) {
        console.log("Erro ao conectar ao MongoDB", error);
    }
};

connetDB();

//CREATE
app.post("/vendas", async (req, res) => {
    try {
        const novaVendaMensal = await VendaMensal.create(req.body);
        res.json(novaVendaMensal);
    } catch (error) {
        res.json({ error: error });
    }
});

//READ
app.get("/vendas", async (req, res) => {
    try {
        const vendasMensais = await VendaMensal.find();
        res.json(vendasMensais);
    } catch (error) {
        res.json({ error: error });
    }
});

//UPDATE
app.put("/vendas/:id", async (req, res) => {
    try {
        const novaVendaMensal = await VendaMensal.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(novaVendaMensal);
    }
    catch (error) {
        res.json({ error: error });
    }
});

//DELETE
app.delete("/vendas/:id", async (req, res) => {
    try {
        const VendaMensalExcluida = await VendaMensal.findByIdAndDelete(
            req.params.id
        );
        res.json(VendaMensalExcluida);
    } catch (error) {
        res.json({ error: error });
    }
});


app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));