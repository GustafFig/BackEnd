require('dotenv/config');
const express = require('express');
const Boom = require('@hapi/boom');
const { API } = require('./controllers');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/api', API);

app.use((err, _req, res, _next) => {
  if (Boom.isBoom(err)) {
    res.status(err.output.statusCode).json(err.output.payload);
  }
  res.status(500).json({ message: 'Internal Error' });
});

const { PORT = 3000 } = process.env;

app.listen(PORT, () => { console.log(`Ouvindo na porta ${PORT}`); });
