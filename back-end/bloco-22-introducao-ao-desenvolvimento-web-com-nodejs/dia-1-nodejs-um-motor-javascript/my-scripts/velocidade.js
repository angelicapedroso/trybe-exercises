const readline = require('readline-sync');

function calcVelocidadeMed() {
  const distancia = readline.questionInt('Qual a distância (em metros)?');
  const tempo = readline.questionInt('Qual o tempo (em segundos)?'); 
  const vm = (distancia / tempo).toFixed(2);

  console.log(`A velocidade média é de ${vm} m/s`);
}

calcVelocidadeMed();
