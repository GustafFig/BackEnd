const readline = require('readline-sync');
const fs = require('fs');

const file = readline.question('Insert your file: ');

fs.readFile(file, 'utf-8', (err, content) => {
  if (err) return console.log('Something went wrong');
  console.log(content);
});

console.log('chegou aqui!!');
