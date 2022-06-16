const fs = require('fs').promises;

const arrToFile = async () => {
  const arr = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const createFiles = arr.map((el, index) => fs.writeFile(`./src/file${ index + 1 }.txt`, el));

  await Promise.all(createFiles);

  const fileNames = [
    './src/file1.txt',
    './src/file2.txt',
    './src/file3.txt',
    './src/file4.txt',
    './src/file5.txt',
  ];

  const readFiles = fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'));
  const fileContents = await Promise.all(readFiles);
  const newFileContent = fileContents.join(' ');
  await fs.writeFile('./src/fileAll.txt', newFileContent);
}

arrToFile();