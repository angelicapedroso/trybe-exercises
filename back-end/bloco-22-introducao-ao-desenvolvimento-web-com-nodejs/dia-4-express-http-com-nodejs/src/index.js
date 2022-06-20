const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const app = express();
app.use(express.json());

app.get('/ping', (_req, res) => {
  return res.json({ message: 'pong' })
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.json({ message: `Hello ${ name }` })
})

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (Number(age) > 17) {
    return res.status(200).json({ message: `Hello', ${ name }` });
  } return res.status(401).json({ message: 'Unauthorized' })
})

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.json({ message: `Seu nome é ${ name } e você tem ${ age } anos de idade` })
})

//simpsons
const FILE = path.resolve(__dirname, 'simpsons.json');

const getSimpsons = async () => {
  const data = await fs.readFile(FILE, 'utf8');
  const simpsons = JSON.parse(data);
  return simpsons;
}

app.get('/simpsons', async (_req, res) => {
  try { 
    const simpsons = await getSimpsons();
    if (simpsons) return res.status(200).json(simpsons);
  }
  catch (err){
    return res.status(500).json({ message: 'Erro ao ler arquivo' });
  }
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
