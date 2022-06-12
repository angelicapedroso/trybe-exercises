const readline = require('readline-sync');

const peso = readline.question('Qual seu peso?');
const altura = readline.questionFloat('Qual sua altura (em metros)?');
const imc = peso / altura**2;

console.log(imc);