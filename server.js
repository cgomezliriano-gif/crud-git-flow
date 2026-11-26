const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Carga automatica: primero middleware/, luego routes/
['middleware', 'routes'].forEach((dir) => {
  const full = path.join(__dirname, dir);
  if (!fs.existsSync(full)) return;
  fs.readdirSync(full)
    .filter((f) => f.endsWith('.js'))
    .sort()
    .forEach((f) => {
      const mod = require(path.join(full, f));
      if (dir === 'middleware') app.use(mod);
      else app.use('/api/items', mod);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
