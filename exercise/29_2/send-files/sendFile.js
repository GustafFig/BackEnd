const fs = require('fs');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');

const form = new FormData();

const stream = fs.createReadStream(path.join(__dirname, '../README.md'));

const formHeaders = form.getHeaders();

form.append('text', stream);

axios
  .post('http://localhost:3000/text/file', form, { headers: formHeaders })
  .then(console.log)
  .then((err) => console.error(err.message, err.stack));
