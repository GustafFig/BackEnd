const fs = require('fs');
const readline = require('readline-sync');
const path = require('path');

const dir = readline.question('Qual pasta você gostaria de ler: ');

const startTime = new Date();

const files = fs.readdirSync(dir);
console.log(files.length)

function fileSize(dir, file) {
  return fs.readFileSync(path.join(dir, file)).byteLength;
}

const totalSize = files.reduce((tot, file) => (
  fs.lstatSync(file).isFile() ? tot += fileSize(dir, file) : tot
), 0);

console.log('Tamanho total: ', totalSize);

const endTime = new Date();

console.log('Tempo', endTime - startTime);
