const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const path = require('path');

const form = new FormData();

const stream1 = fs.createReadStream(path.join(__dirname, '../meu-arquivo.txt'));
const stream2 = fs.createReadStream(path.join(__dirname, '../README.md'));

const formHeaders = form.getHeaders();

form.append('files', stream1);
form.append('files', stream2)

axios.post('http://localhost:3000/multi/', form, { headers: formHeaders })
  .then(({ data }) => console.log(data))
  .catch((err) => console.error(err.message, err.stack));
