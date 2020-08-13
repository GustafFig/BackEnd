/*
rie um script que, sem utilizar recursão, exiba o valor dos n primeiros elementos da sequência de fibonacci.

Não imprima o valor 0, uma vez que ele não está incluso na sequência;
Quando n = 10, exatamente 10 elementos devem ser exibidos;
Utilize o pacote inquirer para solicitar o valor de n ao usuário;
Utilize a propriedade validate do inquirer para validar o valor informado para n. A função de validação deve utilizar outras duas funções para garantir que n atenda às condições abaixo:

Ser um número;
Ser um inteiro.
Lembre-se de converter o valor retornado pelo inquirer para inteiro utilizando parseInt(). Não esqueça de informar a base 10 como segundo parâmetro.
*/
const inquirer = require('inquirer');
const { createQuestionObject } = require('./createQuestionObject');

async function fibonacci() {
  const { fib: positionOnSequence } = await inquirer.prompt([
    createQuestionObject('number', 'fib', 'Coloque uma posição', validateFibonacciNumber),
  ]);

  calculateFibonacciUntil(positionOnSequence);
}

function validateFibonacciNumber(n) {
  if (typeof n !== 'number') return 'Coloque um número, por favor';
  else if (n === 0) return 'Coloque um número positivo';
  else if (!Number.isInteger(n)) return 'Coloque um número intero';
  else return true;
}

function calculateFibonacciUntil(n) {
  f1 = 0;
  f2 = 1;

  for (let i = 0; i < n; i += 1) {
    f2 = f1 + f2;
    f1 = f2 - f1;
    console.log(f2);
  }
}

fibonacci();
