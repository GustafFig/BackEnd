const express = require('express');
const rescue = require('express-rescue');
const fetch = require('node-fetch');

const app = express();

app.get('/teste', rescue((req, res, next) => {
  // console.log('Primeira mensagem', Object.keys(req.headers));
  res.send({ message: 'Hello World' });
  next();
}));

fetch('http://localhost:3000/teste').then((res) => {
  res.json().then(r => console.log(r))
});

console.error('olá')

app.listen(3000, () => console.log('estamos abertos para o mundo e isso me preocupa, hehehehe'));

console.log();
