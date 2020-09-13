const fs = require('fs');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askFile = () => new Promise((resolve, reject) => {
  try {
    rl.question('Qual arquivo você deseja: ', (file) =>
      rl.question('Qual o nome que você deseja: ', (name) => {
        rl.close();
        resolve([file, name]);
      })
    )
  } catch (err) {
    console.error('Error ao pegar nome de arquivo', err);
    reject(err);
  }
})


const createForm = (file, name) => {
  const form = new FormData();

  const stream = fs.createReadStream(path.join(__dirname, file));
  form.append('fileName', name);
  form.append('file', stream);
  return [form, form.getHeaders()];
}

const sendFile = async () => {
  const [file, fileName] = await askFile();
  const [form, headers] = createForm(file, fileName);

  try {
    const { data } = await axios.post('http://localhost:3000/', form, { headers });
    return console.log(data);
  } catch ({ response }) {
    if (response) return console.log(response.data, response.status);
    return console.log('no response');
  }
};

sendFile();
