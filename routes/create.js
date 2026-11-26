const express = require('express');
const store = require('../lib/store');
const router = express.Router();

// Crear item
router.post('/', (req, res) => {
  const { nombre, descripcion } = req.body;
  const item = { id: store.nextId++, nombre, descripcion: descripcion || '' };
  store.items.push(item);
  res.status(201).json(item);
});

module.exports = router;
