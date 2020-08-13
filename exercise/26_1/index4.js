const inquirer = require('inquirer');
const { createQuestionObject } = require('./createQuestionObject');

async function factorial() {
  const { number } = await inquirer.prompt([
    createQuestionObject('number', 'number', 'Coloque um número: ', validaNumero),
  ]);

  console.log(`Factorial de ${number} é ${calculateFactorial(number)}`);
}

function validaNumero(num) {
  if (typeof num !== 'number') return 'Coloque um número, por favor';
  if (num < 0) return 'Coloque um número maior que 0';
  else if (!Number.isInteger(num)) return 'Coloque um número inteiro';
  return true;
} 

function calculateFactorial(f) {
  if (f === 0 || f === 1) return 1;
  else return f * calculateFactorial(f - 1);
}

factorial();
