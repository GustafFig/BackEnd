const express = require('express');
const { text } = require('./controllers');

const app = express();

const { PORT = 3000 } = process.env;

app.use('/text', text);

app.use((err, _req, res, _next) => {
  res.json({ errorMessage: err.message });
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
