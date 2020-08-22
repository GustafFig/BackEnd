const mysqlx = require('@mysql/xdevapi');
const fetch = require('node-fetch');
const cep = require('../controllers/cep');

const CEP_PATTERN = ['cep', 'uf', 'cidade', 'bairro', 'logradouro'];

async function connection() {
  try {
    const session = await mysqlx.getSession({
      user: 'root',
      password: 'pass',
      host: 'localhost',
      port: 33060,
    });
    return session.getSchema('cep_lookup');  
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

function transformToObj(arr) {
  return arr.reduce((obj, feature, index) => {
    obj[CEP_PATTERN[index]] = feature;
    return obj;
  }, {});
}

async function lookupCEP(id) {
  try {
    const db = await connection();
    const table = await db.getTable('cep');
    const cep = await table
      .select(['id', 'uf', 'cidade', 'bairro', 'logradouro'])
      .where('id', ':id')
      .bind('id', id)
      .execute();
    const results = await cep.fetchAll();
    return results.map(transformToObj);
  } catch (err) {
    console.error(err);
  }
}

async function fromOutside(cep) {
  try {
    const response = await fetch(`http://cep.la/api/${cep}`, {
      method: 'GET',
      headers: { Accept: 'application/json' }
    });
    console.log('status', response.url);
    const json = await response.json();
    return json;
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  lookupCEP,
  fromOutside,
};
