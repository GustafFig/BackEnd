const fs = require('fs');
const readline = require('readline-sync');
const path = require('path');
const util = require('util');

// using readline-sync to simplificate code
const dir = readline.question('Qual pasta você gostaria de ler: ');

const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);

async function fileSize(dir, file) {
  return await readFile(path.join(dir, file)).byteLength;
}


async function dirFeatures(dir) {
  const startTime = new Date();

  const files = await readdir(dir);
  console.log(files.length);

  const totalSize = files.reduce((tot, file) => (
    fs.lstatSync(file).isFile() ? tot += fileSize(dir, file) : tot
  ), 0);

  const endTime = new Date();
  console.log('Tamanho total: ', totalSize);
  console.log('Tempo', endTime - startTime);
}

dirFeatures(dir);
