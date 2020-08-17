const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Insert your file: ', (name) => {
  if (rlErr) return rlErr;
  fs.readFile(name, (err, content) => {
    if (err) return console.log('Something went wrong: ', err.message);
    console.log('Tamanho do arquivo: ', content.byteLength);
    console.log('Conteúdo')
    console.log(content.toString('utf8'));
  });
  rl.close();
});
