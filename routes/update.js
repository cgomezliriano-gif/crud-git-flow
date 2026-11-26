const express = require('express');
const store = require('../lib/store');
const router = express.Router();

// Actualizar item
router.put('/:id', (req, res) => {
  const item = store.items.find((i) => i.id === Number(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item no encontrado' });
  const { nombre, descripcion } = req.body;
  if (nombre !== undefined) item.nombre = nombre;
  if (descripcion !== undefined) item.descripcion = descripcion;
  res.json(item);
});

module.exports = router;
