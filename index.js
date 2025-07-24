import "dotenv/config";
import express from "express";
import notFound from "./src/middlewares/not-found.js";
import maintenance from "./src/middlewares/maintenance.js"
import productsRouter from "./src/routes/products.router.js";
import authRouter from "./src/routes/auth.router.js";

const app = express();

app.use(express.json()); 

app.get("/", (req, res) => {
    res.json({ message :  "Bienvenido a la API REST"});
});

app.use('/api/v1', productsRouter);

app.get("/maintance", (req, res) => {
    res.json({ message :  "API en mantenimiento"});
});

app.use(authRouter);

app.use(notFound);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
