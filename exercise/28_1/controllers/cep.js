const rescue = require('express-rescue');
const { Cep } = require('../services');

const getCepResults = rescue(async (req, res) => {
  const { cep } = req.query;
  const result = await Cep.cepRace(cep);

  if (result.length === 0) {
    res.json({ message: 'Results está vazio', result });
    return console.log('getCepResults', result);
  }

  const { uf, cidade, bairro, logradouro } = result;

  await Cep.insertCep(cep, uf, cidade, bairro, logradouro);

  return res.json({ result });
});

module.exports = {
  getCepResults,
}
