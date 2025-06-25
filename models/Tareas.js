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
});
const tarea = new Tarea({
  title: req.body.title,
  descripcion: req.body.descripcion,
});

const Tarea = require('../models/Tarea');