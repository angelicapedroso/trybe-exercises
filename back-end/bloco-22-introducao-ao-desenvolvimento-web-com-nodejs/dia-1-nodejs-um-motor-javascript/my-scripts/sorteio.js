const readline = require('readline-sync');

function adivinharNumero() {
  const numInserido = readline.questionInt('Insira um número de de 0 a 10:');
  const numAleatorio = Math.floor(Math.random() * 10 + 1);

  if (numInserido === numAleatorio) {
    return console.log('Parabéns, número correto!')
  } return console.log(`Opa, não foi dessa vez. O número era ${ numAleatorio }.`)
};

function reiniciarJogo() {
  const jogarNovamente = readline.question('Deseja jogar novamente (digite "s" para sim e "n" para não)?');
  if (jogarNovamente !== 's') return console.log('Ok, até mais!');

  adivinharNumero();
  reiniciarJogo();
}

adivinharNumero();
reiniciarJogo();
