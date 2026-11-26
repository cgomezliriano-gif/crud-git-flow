// Corrige el problema de items creados/actualizados con datos invalidos
module.exports = (req, res, next) => {
  const aplica = req.path.startsWith('/api/items') && ['POST', 'PUT'].includes(req.method);
  if (!aplica) return next();

  const { nombre } = req.body || {};
  const esPost = req.method === 'POST';
  if ((esPost || nombre !== undefined) && (typeof nombre !== 'string' || nombre.trim() === '')) {
    return res.status(400).json({ error: 'El campo "nombre" es obligatorio' });
  }
  next();
};
