const readline = require('readline');
const fs = require('fs');
const util = require('util');

const rl = readline.createInterface({
  input: process.stdin, // process is a native standart variable of node
  output: process.stdout,
});

const promisifiedQuestion = (question) => new Promise((resolve, reject) => {
  try {
    rl.question(question, (fileName) => {
      resolve(fileName);
      rl.close();
    });
  } catch (err) {
    reject(err);
  }
});

const promisifiedReadFile = util.promisify(fs.readFile);

const readFile = async (file) => {
  try {
    const content = await promisifiedReadFile(file);
    console.log(`Seu arquivo tem ${content.byteLength}
    ------------------------------ 
    O conteúdo do arquivo é:
    
    ${content.toString('utf8')}`);
  } catch (err) {
    console.log(`Erro ao ler o arquivo: ${err.message}`);
  } 
};

const showFile = async () => {
  const fileName = await promisifiedQuestion('Insert your file: ');
  await readFile(fileName);
};

showFile();
