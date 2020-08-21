const fs = require('fs');
const util = require('util');
const express = require('express');
const rescue = require('express-rescue');

const writeFile = util.promisify(fs.writeFile); // usando Promise ao invés de node callback(err, content)

const readSimpFile = () => new Promise((resolve, reject) => {
  fs.readFile('./simpsons.json', (err, content) => {
    if (err) {
      return reject({
        message: 'Not possible to read file: simpsons.json',
        error: err,
      });
    }
    resolve(content);
  });
});

const router = express.Router();

async function createSimpsonVeirfication(req, res, next) {
  const { id, name } = req.headers;

  if (!id || !name) next('Missing params');

  const content = await readSimpFile();

  if (content.some(({ idBd }) => idBd === id)) {
    res.status(404);
    res.send(`This id: ${id} already exists`);
  }
}

// function erro(req, res, next) {

// }

function errMidleWare(err, _req, res, _next) {
  if (err.message === 'Not possible to read file: simpsons.json') {
    console.error(err.message, err.error);

  }
  res.status(500);
  res.send({ message: 'Sorry we have, some inside error :(' });
}

// Exercício 7 GET e Exercicio 9 POST
router
  .route('/')
  .get(rescue(async (req, res) => {
    const content = await readSimpFile();
    console.log(req.headers);
    res.status(200);
    res.send(content);
  }))
  .post(rescue(async (req, res) => {
    const { name, id } = req.headers;
    const content = await readSimpFile();
    const updatedContent = [
      ...JSON.parse(content),
      { name, id, },
    ];

    await writeFile('./simpsons.json', JSON.stringify(updatedContent));

    res.send({
      message: 'Success to save simpsons',
      simpson: { id, name },
    });
  }));

// Exercise 8
router.get('/:id', rescue(async (req, res) => {
  const content = await readSimpFile();
  const character = JSON.parse(content).find((content) => req.params.id === content.id);
  if (!character) res.send([]);
  res.status(200);
  res.send(character);
}));


// Exercicio 9

router.use(createSimpsonVeirfication)
router.use(errMidleWare);

module.exports = {
  simpsonsRouter: router
};
