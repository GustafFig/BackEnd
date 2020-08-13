const readline = require('readline-sync');

function IMC() {
  const peso = readline.questionFloat('Insira seu peso: ');
  const altura = readline.questionFloat('Insira sua altura: ');
  
  console.log(`Peso é: ${peso}`);
  console.log(`Altura é: ${altura}`);

  trataIMC(calculaIMC(peso, altura).toFixed(2));
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

console.log(IMC());
