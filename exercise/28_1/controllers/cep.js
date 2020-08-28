const rescue = require('express-rescue');
const { Cep } = require('../services');

const getCepResults = rescue(async (req, res) => {
  const { cep, state, city, neightborhood, publicPlace } = req.body;

  const result = await Cep.cepRce(cep);

  await Cep.insertCep(result);

  return res.json({ ceps });
});

module.exports = {
  getCepResults,
}
