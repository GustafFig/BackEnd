const fs = require('fs');
const FormData = require('form-data');
const axios = require('axios');
const app = require('../io-multer/app');

const stream = fs.createReadStream('./meu-arquivo.txt');

const form = new FormData();

form.append('img', stream);

const formHeaders = form.getHeaders();
axios.
  post('http://localhost:3000/up', form, {
    headers: { ...formHeaders }
  })
  .then((response) => console.log(response.status))
  .catch((error) => console.error(error));
