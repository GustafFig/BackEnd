require('dotenv/config');
const express = require('express');
const app = express();

const { PORT = 3000 } = process.env;

app.route('/ping').get((_req, res) => res.send('pong'));

app.listen(PORT, () => { console.log(`Ouvindo na porta ${PORT}`); });
