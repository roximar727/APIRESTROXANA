const express = require('express');
const mongoose = require('mongoose');
const tareasRoute = require('./routes/tareas');
const dotenv = require('dotenv');

dotenv.config(); // Carga variables de entorno desde .env

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para manejar JSON
app.use(express.json());

// Ruta base para las tareas
app.use('/api/tareas', tareasRoute);

// Conexión a MongoDB usando variable del .env
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(' Conectado a MongoDB'))
.catch((err) => console.error(' Error al conectar a MongoDB:', err));

// Iniciar servidor
app.listen(PORT, () => {
    console.log(` Servidor corriendo en http://localhost:${PORT}`);
});
