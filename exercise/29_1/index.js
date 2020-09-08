require('dotenv/config');
const express = require('express');
const { API } = require('./controllers');

const app = express();

const { PORT = 3000 } = process.env;

app.use('/api', API);

app.listen(PORT, () => { console.log(`Ouvindo na porta ${PORT}`); });
