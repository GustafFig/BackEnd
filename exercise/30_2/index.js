const express = require('express');

const app = express();

const { PORT = 3000, ENV } = process.env;

app.route('/')
  .get((_req, res) => {
    res.status(200).send(`
    <body>
      <h1>Você está no:</h1>
        <p>ambiente: ${ENV}</p>
        <p>processo: ${process.pid}</p>
        <p>Porta: ${PORT}</p>
    </body>
    `);
  });

app.route('/debug')
  .get((_res, res) => {
    res.status(200).send('Morri :P');
    process.exit(1);
  });

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

