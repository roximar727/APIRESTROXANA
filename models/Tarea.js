const mongoose = require('mongoose');

const TareaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  fechaRegistro: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Tarea', TareaSchema); // ← singular