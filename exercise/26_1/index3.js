/*
Por último, modifique o script para que ele utilize o pacote inquirer para solicitar as informações ao usuário no terminal. Para entender como utilizar o inquirer, consulte a documentação no site do npm. Além disso, você pode precisar relembrar o que já aprendemos sobre Promises em outra aula.

Observação: Utilize a propriedade validate das perguntas do inquirer para verificar se os valores digitados são números válidos.
*/
const inquirer = require('inquirer');
const { createQuestionObject } = require('./createQuestionObject');

/**
 * Documentation of inquirer
 * https://www.npmjs.com/package/inquirer
 */
function IMC() {
  try {
    inquirer.prompt([
      createQuestionObject('number', 'peso', 'Insira seu peso: '),
      createQuestionObject('number', 'altura', 'Insira sua altura: '),
    ]).then(({ peso, altura}) => {
      console.log(`Peso: ${peso}`);
      console.log(`Altura: ${altura}`);
    
      trataIMC(calculaIMC(peso, altura).toFixed(2));
    });
    // console.log(peso)
  } catch (err) { console.log(err) }
    const altura = 1;
    // const peso = readline.questionFloat('Insira seu peso: ');
    // const altura = readline.questionFloat('Insira sua altura: ');
  
};

function calculaIMC(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function trataIMC(imc) {
  if (imc < 18.5) {
    console.log(`Seu imc de ${imc} está baixo. Verifique sua saúde com um profissional`);
  } else if (imc < 24.9) {
    console.log(`Seu imc de ${imc} aparenta está baixo. Talvez seja bom você consultar com um profissional`);
  } else if (imc < 29.9) {
    console.log(`Seu imc de ${imc} aparenta está ótimo.`);
  } else if (imc < 34.9) {
    console.log(`Seu imc é ${imc} aparenta está um pouco alto. Talvez seja bom você consultar com um profissional`);
  } else if (imc < 39.9) {
    console.log(`Seu imc é ${imc} aparenta está alto. Verifique sua saúde com um profissional`);
  } else {
    console.log(`Seu imc é ${imc} aparenta está muito alto. ATENÇÃO, Verifique sua saúde com um profissional`);
  }
}

IMC();
