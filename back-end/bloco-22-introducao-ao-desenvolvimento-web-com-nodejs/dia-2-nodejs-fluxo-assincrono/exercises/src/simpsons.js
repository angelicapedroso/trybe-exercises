const fs = require('fs').promises;
const path = require('path')

const file = path.resolve(__dirname, 'simpsons.json');

fs.readFile(file, 'utf8')
  .then((result) => {
    const simpsons = JSON.parse(result);
    const data = simpsons.map(({ id, name }) => `${ id } - ${ name }`)

    data.forEach((el) => console.log(el));
  })
  .catch((err) => console.log(err.message));
