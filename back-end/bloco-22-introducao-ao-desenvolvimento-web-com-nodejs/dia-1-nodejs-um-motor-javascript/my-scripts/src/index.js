const readline = require('readline-sync');

const getSelectScript = () => {
  const scriptList = [
    `
   1- calcular imc
   2- calcular velocidade média
   3- adivinhar número
   `];

  const question = readline.questionInt(`
  Qual script deseja executar?
   ${ scriptList }
   Digite o número correspondente:`)

  if (question === 1) return require('./imc');
  else if (question === 2) return require('./velocidade');
  else if (question === 3) return require('./sorteio');
  else return console.log('número inválido');
}

getSelectScript();
