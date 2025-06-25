const express = require('express');
const router = express.Router();
const Tarea = require('../models/Tarea'); // Asegúrate que el archivo se llame Tarea.js

// Obtener todas las tareas
router.get('/', async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener una tarea por ID
router.get('/:tareaId', async (req, res) => {
  try {
    const tarea = await Tarea.findById(req.params.tareaId);
    if (!tarea) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.json(tarea);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear nueva tarea
router.post('/', async (req, res) => {
  const tarea = new Tarea({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    correo: req.body.correo,
  });

  try {
    const nuevaTarea = await tarea.save();
    res.status(201).json(nuevaTarea);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Actualizar una tarea por ID
router.patch('/:tareaId', async (req, res) => {
  try {
    const updatedTarea = await Tarea.updateOne(
      { _id: req.params.tareaId },
      {
        $set: {
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          correo: req.body.correo,
        },
      }
    );
    res.json(updatedTarea);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar una tarea por ID
router.delete('/:tareaId', async (req, res) => {
  try {
    const deletedTarea = await Tarea.findByIdAndDelete(req.params.tareaId);
    if (!deletedTarea) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.json({ message: 'Tarea eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;