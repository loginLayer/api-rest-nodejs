import express from "express";
import notFound from "./src/middlewares/not-found.js";
import maintenance from "./src/middlewares/maintenance.js"
const app = express();

app.use(maintenance);

app.get("/", (req, res) => {
    res.json({ message :  "Bienvenido a nuestra API REST"});
});

app.use(notFound);

const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

