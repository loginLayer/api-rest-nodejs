import "dotenv/config";
import express from "express";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message :  "Bienvenido a la API REST"});
});

import productsRouter from "./src/routes/products.router.js";
app.use('/api/v1', productsRouter);

import authRouter from "./src/routes/auth.router.js";
app.use(authRouter);

import notFound from "./src/middlewares/not-found.js";

import maintenance from "./src/middlewares/maintenance.js"
app.get("/maintance", (req, res) => {
    res.json({ message :  "API en mantenimiento"});
});

app.use(notFound);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
