const readline = require('readline-sync');
const fs = require('fs');
const util = require('util');

const file = readline.question('Insert your file: ');

const readFile = util.promisify(fs.readFile);

readFile(file, 'utf-8')
  .then((content) => console.log(content))
  .catch((err) => console.log('Aconteceu algo errado'));

console.log('chegou aqui!!');
