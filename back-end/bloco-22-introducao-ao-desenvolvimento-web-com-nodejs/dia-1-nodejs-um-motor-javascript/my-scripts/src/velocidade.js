const readline = require('readline-sync');

const calcVm = () => {
  const distancia = readline.questionInt('Qual distância (em metros)?');
  const tempo = readline.questionInt('Qual o tempo (em segundos)');
  const vm = distancia / tempo;

  console.log(`A velocidade média é de ${ vm.toFixed(1) } m/s.`);
}

calcVm();

module.exports = calcVm;