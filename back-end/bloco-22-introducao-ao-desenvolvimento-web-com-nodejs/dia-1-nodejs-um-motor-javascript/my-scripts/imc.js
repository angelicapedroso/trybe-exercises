const readline = require('readline-sync');

const peso = readline.question('Qual seu peso?');
const altura = readline.questionFloat('Qual sua altura (em metros)?');
const imc = peso / altura ** 2;

const getImc = (imc) => {
  if(imc < 18.5) return 'abaixo do peso (magreza)';
  else if(imc < 25) return 'peso normal';
  else if(imc < 30) return 'acima do peso (sobrepeso)';
  else if(imc < 35) return 'obesidade grau I';
  else if(imc < 40) return 'obesidade grau II';
  else return 'obesidade grau III';
}

console.log(`Seu IMC é de ${imc.toFixed(1)}, ${getImc(imc)}.`);
