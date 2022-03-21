const readline = require('readline-sync');

function calcImc() {
  const peso = readline.questionFloat('Qual seu peso?');
  const altura = readline.questionFloat('Qual sua altura?');
  const imc = (peso / Math.pow(altura, 2)).toFixed(2);
  
  console.log(`O seu IMC é ${imc}`);

  if(imc < 18.5) {
    return console.log('Situação: Abaixo do peso (magreza)');
  } 

  if(imc >= 18.5 && imc < 25 ) {
    return console.log('Situação: Peso normal');
  }

  if(imc >= 25 && imc < 30 ) {
    return console.log('Situação: Acima do peso (sobrepeso)');
  }

  if(imc >= 30 && imc < 35 ) {
    return console.log('Situação: Obesidade grau I');
  }

  if(imc >= 35 && imc < 40 ) {
    return console.log('Situação: Obesidade grau II');
  }

  return console.log('Situação: Obesidade graus III e Iv');

}

calcImc();
