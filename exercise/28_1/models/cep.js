const { connectTo } = require('./connection');

async function createCep(cep, state, city, neightborhood, publicPlace) {
  const collection = await connectTo('ceps');
  return collection.insertOne(cep, state, city, neightborhood, publicPlace);
}

async function getByNumber(cep) {
  const collection = await connectTo('ceps');
  return collection.find({ cep }).toArray();
}

async function deleteByNumber(cep) {
  const collection = await connectTo('ceps');
  return collection.deleteOne({ cep });
}

module.exports = {
  createCep,
  getByNumber,
  deleteByNumber,
}
