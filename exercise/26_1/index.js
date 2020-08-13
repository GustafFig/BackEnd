const readline = require('readline-sync');

function IMC() {
  const peso = readline.questionFloat('Insira seu peso: ');
  const altura = readline.questionFloat('Insira sua altura: ');
  
  console.log(`Peso é: ${peso}`);
  console.log(`Altura é: ${altura}`);

  return `Seu IMC é ${calculaIMC(peso, altura).toFixed(2)}`;
};

function calculaIMC(peso, altura) {
  return peso / Math.pow(altura, 2);
}

console.log(IMC());
