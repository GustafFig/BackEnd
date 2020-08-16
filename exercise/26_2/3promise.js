const readline = require('readline');
const fs = require('fs');
const util = require('util');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readFile = util.promisify(fs.readFile);
const takeFileName = () => new Promise((resolve, reject) => {
  try {
    rl.question('Insert your file: ', (fileName) => {
      resolve(fileName);
      rl.close();
    });
  } catch (err) {
    reject(err);
  }
});

takeFileName()
  .then((fileName) => {
    console.log('nome do arquivo', fileName);
    return readFile(fileName);
  }).then((content) => {
    console.log('Tamanho do arquivo: ', content.byteLength);
    console.log('Conteúdo');
    console.log(content.toString('utf8'));
  }).catch((err) => {
    console.log('Aconteceu algo errado ao ler o arquivo: \n', err.message);
  });
