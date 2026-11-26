const express = require('express');
const store = require('../lib/store');
const router = express.Router();

// Listar items
router.get('/', (req, res) => res.json(store.items));

// Obtener un item por id
router.get('/:id', (req, res) => {
  const item = store.items.find((i) => i.id === Number(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item no encontrado' });
  res.json(item);
});

module.exports = router;
