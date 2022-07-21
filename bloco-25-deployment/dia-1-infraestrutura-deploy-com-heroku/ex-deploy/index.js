const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  return res.send('Está vivo!!!')
});

const PORT = 3001;

app.listen(PORT, () => console.log(`ouvindo na porta ${ PORT }`));
