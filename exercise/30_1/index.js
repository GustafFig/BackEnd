const express = require('express');

const app = express();

app.route('/')
  .get((_req, res) => {
    res.status(200).send('Está vivo!!!');
  });

const { PORT = 3000 } = process.env;

app.listen(PORT, () => { console.log(`Ouvindo na ports ${PORT}` )});
