const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const tareasRoute = require('./routes/tareas');
const usuariosRoute = require('./routes/usuarios'); // ← Este debe existir

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // ← Esto es esencial y ya lo tienes bien

app.use('/api/tareas', tareasRoute);
app.use('/api/usuarios', usuariosRoute); // ← Este archivo también debe estar creado y bien hecho

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch((err) => console.error('❌ Error al conectar a MongoDB:', err));

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});