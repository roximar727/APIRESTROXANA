const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const tareasRoute = require('./routes/tareas');
const usuariosRoute = require('./routes/usuarios'); // Asegúrate de que este archivo exista

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware para analizar JSON

// Rutas
app.use('/api/tareas', tareasRoute);
app.use('/api/usuarios', usuariosRoute);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch((err) => console.error('❌ Error al conectar a MongoDB:', err));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});