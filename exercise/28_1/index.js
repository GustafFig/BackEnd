require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');
const { Cep } = require('./controllers');

const app = express();

app.use(bodyParser.json());

app.route('/')
  .get(Cep.getCepResults);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Estamos online ${PORT}`))
