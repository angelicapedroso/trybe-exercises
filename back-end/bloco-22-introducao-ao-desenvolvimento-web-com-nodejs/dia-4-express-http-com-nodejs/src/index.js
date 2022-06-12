const express = require('express');

const app = express();

app.get('/ping', (_req, res) => {
  res.json(message: '1')
})

app.listen(4000, () => {
  console.log('Aplicação rodando na porta 4000');
});