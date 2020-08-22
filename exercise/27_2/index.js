const express = require('express');
const bodyParse = require('body-parser');
const cepControllers = require('./controllers/cep.js');

let counter = 0;
const app = express();

function informationOfRequest(req) {
  const date = new Date();
  console.log(`
Method: ${req.method}
Path: ${req.path}
Date: ${date.toLocaleDateString()}
`);
}

app.use(bodyParse.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.set('views', './views');

app.use((req, _res, next) => {
  informationOfRequest(req);
  next();
});

app
  .route('/')
  .get((_req, res) => {
    console.log('foi tentado entrar', counter++)
    res.render('open');
  }).post(cepControllers.searchInformation);

app.use(cepControllers.errCep);

const PORT = process.env.port || 3000;

app.listen(PORT, () => { console.log(`Estamos online na porta ${PORT}`); });
