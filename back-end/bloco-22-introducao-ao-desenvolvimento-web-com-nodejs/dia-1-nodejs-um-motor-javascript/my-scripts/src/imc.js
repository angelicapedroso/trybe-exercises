const readline = require('readline-sync');

const getImc = () => {
  const peso = readline.question('Qual seu peso?');
  const altura = readline.questionFloat('Qual sua altura (em metros)?');
  const imc = peso / altura ** 2;
  console.log(`IMC: ${imc.toFixed(1)}`);

  if (imc < 18.5) return console.log('Abaixo do peso (magreza)');
  else if (imc < 25) return console.log('Peso normal');
  else if (imc < 30) return console.log('Acima do peso (sobrepeso)');
  else if (imc < 35) return console.log('Obesidade grau I');
  else if (imc < 40) return console.log('Obesidade grau II');
  else return console.log('Obesidade grau III');
}

getImc();

module.exports = getImc;