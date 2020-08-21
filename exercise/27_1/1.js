const express = require('express');
const { simpsonsRouter } = require('./simpsons');
const simpsons = require('./simpsons');

const app = express();

// Como o exercício 1 é set up da aplicação (consulte o package.json), começo aqui com o exercício 2
app.get('/ping', (_req, res) => res.send({ message: "Pong!" }));

// Exercício 3, tratamento de erro, mais para frente.
// ATENÇÃO, não funciona com o 4 no mesmo arquivo, precisa comentar um dos dois
// app.post('/hello', (req, res) => {
//   res.send({ message: `Hello, ${req.headers.username}` });
// });

// Exercício 4
// ATENÇÃO, não funciona com o 3 no mesmo arquivo, precisa comentar um dos dois
app.post('/hello', (req, res) => {
  const { age, username } = req.headers;
  if (parseInt(age) >= 18) {
    res.send({ message: `Hello, ${username}`, age: age});
  } else {
    res.status(401);
    res.send({ message: "Unhautorized" });
  }
});

// Exercício 5
app.put('/users/:name/:age', (req, res) => {
  const { age, name } = req.params;
  res.send({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });
});

// Exercício 6 -> simpsons.json
// Exercício 7 -> simpsons.js

app.use('/simpsons', simpsonsRouter);

app.listen(3000, () => console.log('Estamos no ar'));
