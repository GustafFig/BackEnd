const { Cep, externalCep } = require('../models');

/**
 * pesquisa nas duas fontes primeiro interna
 * @param {string ou números de 8 digitos} cep
 */
async function searchInsideOrOutside(cep) {
  const response = await Cep.getByNumber();
  
  if (response.length !== 0) return response;

  return externalCep.fetchCeps(cep);
}

async function cepRace(cep) {
  const result = await Promise.race([
    searchInsideOrOutside(cep),
    externalCep.fetchCeps(cep),
  ]);

  return result;
}

async function insertCep(cep, state, city, neighborhood, publicPlace) {
  const alreadyExists = await Cep.getByNumber(cep);
  
  if (alreadyExists.length !== 0) return;

  return Cep.createCep(cep, state, city, neighborhood, publicPlace);
}

module.exports = {
  insertCep,
  cepRace,
};
