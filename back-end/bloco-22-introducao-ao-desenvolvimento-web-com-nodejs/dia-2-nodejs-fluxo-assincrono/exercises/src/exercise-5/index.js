const fs = require('fs').promises;

const arrToFile = async () => {
  const arr = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const createFiles = arr.map((el, index) => fs.writeFile(`./src/exercise-6/file${ index + 1 }.txt`, el));

  await Promise.all(createFiles);

  const fileNames = [
    './src/exercise-6/file1.txt',
    './src/exercise-6/file2.txt',
    './src/exercise-6/file3.txt',
    './src/exercise-6/file4.txt',
    './src/exercise-6/file5.txt',
  ];

  const readFiles = fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'));
  const fileContents = await Promise.all(readFiles);
  const newFileContent = fileContents.join(' ');
  await fs.writeFile('./src/exercise-6/fileAll.txt', newFileContent);
}

arrToFile();