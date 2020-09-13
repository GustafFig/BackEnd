const fs = require('fs');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');

const form = new FormData();

const stream = fs.createReadStream(path.join(__dirname, '../foto.png'));

form.append('img', stream);

const formHeaders = form.getHeaders();

axios.post('http://localhost:3000/img', form, { headers: formHeaders })
  .then(({ data }) => console.log(data))
  .catch((err) => console.error(err.message, err.stack));
