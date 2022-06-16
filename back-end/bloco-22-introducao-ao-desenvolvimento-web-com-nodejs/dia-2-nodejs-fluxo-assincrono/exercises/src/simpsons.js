const fs = require('fs').promises;
const path = require('path')

const file = path.resolve(__dirname, 'simpsons.json');

// fs.readFile(file, 'utf8')
//   .then((result) => {
//     const data = JSON.parse(result);
//     const simpsons = data.map(({ id, name }) => `${ id } - ${ name }`)

//     simpsons.forEach((el) => console.log(el));
//   })
//   .catch((err) => console.error(err.message));

const getId = async (id) => {
  try {
    const fileContent = await fs.readFile(file, 'utf8');
    const simpsons = JSON.parse(fileContent);
    const idSimpson = simpsons.find((simpson) => Number(simpson.id) === id)

    if (!idSimpson) {
      throw new Error('id não encontrado');
    }
    return idSimpson;
  } catch (err) {
    console.log(err.message);
  }
}

// const getId = (ID) => {
//   fs.readFile(file, 'utf8')
//     .then((result) => {
//       const simpsons = JSON.parse(result);
//       console.log(simpsons);
//       const idSimpson = simpsons.find(({id}) => Number(console.log(id)) === ID);

//       if (!idSimpson) {
//         throw new Error('id não encontrado');
//       }
//       return idSimpson;
//     })
//     .catch((err) => console.log(err.message));
// }

// console.log(getId(1));

const getSimpsonId = () => {
  getId(1)
    .then((simpson) => console.log(simpson))
    .catch((err) => console.log(err.message))
}

getSimpsonId();