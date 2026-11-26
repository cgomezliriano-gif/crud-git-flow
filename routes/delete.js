const express = require('express');
const store = require('../lib/store');
const router = express.Router();

// Eliminar item
router.delete('/:id', (req, res) => {
  const index = store.items.findIndex((i) => i.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Item no encontrado' });
  const [removed] = store.items.splice(index, 1);
  res.json(removed);
});

module.exports = router;
