const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

const usuarioRoutes = require('./routes/usuario.routes');
app.use('/usuarios', usuarioRoutes);


app.get('/', (req, res) => {
    res.send(`Api corriendo en el puerto ${port}`);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

