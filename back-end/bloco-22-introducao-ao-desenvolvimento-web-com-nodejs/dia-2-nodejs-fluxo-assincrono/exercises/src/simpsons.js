const fs = require('fs').promises;
// const path = require('path')

const fileSimpsons = './src/simpsons.json';
const fileSimpsonsFamily = './src/simpsonsFamily.json';

fs.readFile(file, 'utf8')
  .then((result) => {
    const data = JSON.parse(result);
    const simpsons = data.map(({ id, name }) => `${ id } - ${ name }`)

    simpsons.forEach((el) => console.log(el));
  })
  .catch((err) => console.error(err.message));

const getId = async (id) => {
  try {
    const fileContent = await fs.readFile(fileSimpsons, 'utf8');
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
//   fs.readFile(fileSimpsons, 'utf8')
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


const removeSimpsons = async () => {
  try {
    const fileContent = await fs.readFile(fileSimpsons, 'utf8');
    const simpsons = JSON.parse(fileContent);
    const newSimpsons = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
    await fs.writeFile(fileSimpsons, JSON.stringify(newSimpsons));
  }
  catch (err) {
    console.log(err.message);
  }
}

removeSimpsons()

const createSimpsonsFamily = async () => {
  try {
    const fileContent = await fs.readFile(fileSimpsons, 'utf8');
    const simpsons = JSON.parse(fileContent);
    const ids = [1, 2, 3, 4];
    const simpsonsFamily = simpsons.filter((simpson) => ids.includes(Number(simpson.id)));
    await fs.writeFile(fileSimpsonsFamily, JSON.stringify(simpsonsFamily));
  }
  catch (err) {
    console.log(err.message);
  }
}

createSimpsonsFamily();

const addCharacterSimpsonsFamily = async () => {
  try {
    const fileContent = await fs.readFile(fileSimpsonsFamily, 'utf8');
    const simpsons = JSON.parse(fileContent);
    const character = { "id": "5", "name": "Nelson Muntz" };
    await fs.writeFile(fileSimpsonsFamily, JSON.stringify([...simpsons, character]));
  }
  catch (err) {
    console.log(err.message);
  }
}

addCharacterSimpsonsFamily();

const replaceCharacter = async () => {
  try {
    const fileContent = await fs.readFile(fileSimpsonsFamily, 'utf8');
    const simpsons = JSON.parse(fileContent);
    const filterSimpson = simpsons.filter((simpson) => simpson.id !== '5')
    const newCharacter = { "id": "5", "name": "Maggie Simpson" };
    await fs.writeFile(fileSimpsonsFamily, JSON.stringify([...filterSimpson, newCharacter]));
  }
  catch (err) {
    console.log(err.message);
  }
}

replaceCharacter();