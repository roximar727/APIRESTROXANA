const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
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
    unique: true,
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

module.exports = mongoose.model('Usuario', UsuarioSchema);