const fs = require('fs');
const readlineSync = require('readline-sync');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const file1 = readlineSync.question('Qual o primeiro arquivo que você quer ler? ');
const file2 = readlineSync.question('Qual o segundo arquivo que você quer ler? ');

async function measureTime() {
  const startTime = process.hrtime();

  const content1 = await readFile(file1);
  console.log(content1.toString('utf8'));
  console.log('Tamnaho: ', content1.byteLength);

  const content2 = await readFile(file2)
  console.log(content2.toString('utf8'));
  console.log('Tamnaho: ', content2.byteLength);

  const endTime = process.hrtime(startTime)[1] / 1000000;
  console.log('time:', endTime, 'ms');
}

measureTime();
