/*
O script deve calcular o IMC de uma pessoa e exibi-lo na tela. Crie um novo pacote chamado calcula-imc, e utilize o script start do npm para executar nosso arquivo index.js. Siga utilizando o pacote readline-sync para coletar os dados do usuário. A fórmula para cálculo do IMC é peso / altura².

Observação: Lembre-se que peso e altura não são sempre números inteiros e, portanto, não podemos utilizar a função questionInt do pacote readline-sync. No entanto, o mesmo pacote possui uma função para tratar números com casas decimais. Encontre essa função na documentação do readline-sync e não se esqueça de utilizar o toFixed(2) nos números decimais!

Dica: Para utilizar o npm start, lembre-se de configurar seu package.json, adicionando a seus scripts um start: "node index.js", por exemplo. Nesse exemplo, o index.js representa o arquivo main do seu package.json.

*/

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
