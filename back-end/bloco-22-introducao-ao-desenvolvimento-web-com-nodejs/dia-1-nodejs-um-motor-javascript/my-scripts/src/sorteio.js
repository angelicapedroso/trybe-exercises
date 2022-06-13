const readline = require('readline-sync');

const getRaffleNumber = () => {
  const input = readline.questionInt('Digite um número entre 0 e 10:')
  const random = (Math.round(Math.random() * 10));
  if (input === random) console.log("Parabéns, número correto!");
  if (input !== random) console.log(`Opa, não foi dessa vez. O número era ${ random }!`);
  const repeat = readline.question('Deseja jogar novamente (digite "s" para sim e "n" para não)?')
  if (repeat !== 's') return;
  getRaffleNumber();
}

getRaffleNumber();
