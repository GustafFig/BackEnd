const readline = require('readline-sync');
const fs = require('fs');
const util = require('util');

const file = readline.question('Insert your file: ');

const promisifiedReadFile = util.promisify(fs.readFile);

const readFile = async () => {
  try {
    const content = await promisifiedReadFile(file, 'utf-8');
    console.log(content);
  } catch (err) {
    console.log(err)
  } 
}

readFile()

console.log('chegou aqui!!');
