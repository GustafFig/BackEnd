const readline = require('readline');
const fs = require('fs');
const util = require('util');

const rlFile = readline.createInterface({
  input: process.stdin, // process is a native standart variable of node
  output: process.stdout,
});

const askQuestion = (question) => new Promise((resolve, reject) => {
  try {
    rlFile.question(question, (fileName) => {
      resolve(fileName);
      console.log(fileName);
    });
  } catch (err) {
    reject(err);
  }
});

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const exists = util.promisify(fs.exists);

const takeInformation = async () => {
  try {
    const file = await askQuestion('Arquivo de leitura: ');
    const content = await readFile(file);
    const wordToBeReplaced = await askQuestion('Palavra a ser trocada: ');
    const newWord = await askQuestion('Palavra nova: ');
    console.log(content.toString('utf8'))
    return content.toString('utf8').replace(new RegExp(wordToBeReplaced, 'g'), newWord);
  } catch (err) {
    console.log('Algo deu errado, confirme se o arquivo existe', err);
    rlFile.close();
  }
}

const confirmRewrite = async (newContent, newFile) => {
  const isToChange = await askQuestion('O arquivo de escrita já existe, deseja substituir? s/n ');
  switch (isToChange.toLowerCase()) {
    case 's':
      await writeFile(newFile, newContent, 'utf-8');
      break;
    case 'n': break;
    default: await confirmRewrite(newContent, newFile);
  }
}

const changeWord = async (newContent) => {
  const newFile = await askQuestion('Arquivo para salvar: ');
  if (!(await exists(newFile))) {
    await writeFile(newFile, newContent, 'utf-8');
  } else {
    await confirmRewrite(newContent, newFile);
  }
};

const makeProcess = async () => {
  const newContent = await takeInformation();
  await changeWord(newContent);
  console.log('Volte sempre');
  rlFile.close();
}

makeProcess();
