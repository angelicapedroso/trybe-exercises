const express = require('express');
const app = express();
app.use(express.json());

app.get('/ping', (_req, res) => {
  return res.json({ message: 'pong' })
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.json({ message: `Hello ${name}` })
})

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (Number(age) > 17) {
    return res.status(200).json({ message: `Hello', ${name}` });
  } return res.status(401).json({ message: 'Unauthorized' })
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
