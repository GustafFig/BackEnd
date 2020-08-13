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
