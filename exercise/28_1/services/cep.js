const { Cep, externalCep } = require('../models');

async function cepRce(cep) {
  const result = await Promise.race([
    Cep.getByNumber(cep),
    externalCep.fetchCeps(cep),
  ]);

  return result[0];
}

async function insertCep(result) {
  const alreadyExists = Cep.getByNumber(result.cep);

  if (alreadyExists) return;

  const { cep, state, city, neighborhood, publicPlace } = result;
  return Cep.createCep(cep, state, city, neighborhood, publicPlace)
}

module.exports = {
  insertCep,
  cepRce,
};
