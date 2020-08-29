require('dotenv/config');
const mysqlx = require('@mysql/xdevapi');
const fetch = require('node-fetch');

const CEP_PATTERN = ['cep', 'uf', 'cidade', 'bairro', 'logradouro'];

async function storeOneCep(cepInst, table) {
  try {
    const { cep, uf, cidade, bairro, logradouro } = cepInst;
    const existisCep = await lookupCEP(cep).length;
    console.log(existisCep)
    if (existisCep) return;
    await table
      .insert(['id', 'uf', 'cidade', 'bairro', 'logradouro'])
      .values(cep, uf, cidade, bairro, logradouro)
      .execute();
    console.log('saved')

  } catch (err) {
    console.error('inside storeOneCep', err);
  }
}

async function storeCep(ceps) {
  try {
    const db = await connection();
    const table = db.getTable('cep');

    for (let i = 0; i < ceps.length; i += 1) {
      await storeOneCep(ceps[i], table);
    }

    return ceps;
  } catch (err) {
    console.error(err);
  }
}

async function connection() {
  try {
    const session = await mysqlx.getSession({
      user: process.env.USER,
      password: process.env.PASSWORD,
      host: process.env.HOST,
      port: 33060,
    });
    return session.getSchema('cep_lookup');  
  } catch (err) {
    console.error('inside connection', err);
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
    const db = await connection()
    const table = db.getTable('cep');

    const cep = await table
      .select(['id', 'uf', 'cidade', 'bairro', 'logradouro'])
      .where('id = :id')
      .bind('id', id)
      .execute();

    return cep.fetchAll();
  } catch (err) {
    console.error('inside lookup', err);
  }
}

async function fromOutside(cep) {
  try {
    const response = await fetch(`http://cep.la/api/${cep}`, {
      method: 'GET',
      headers: { Accept: 'application/json' }
    });

    console.log('status', response.url);
    const ceps = await response.json();

    await storeCep(ceps);

    return ceps;
  } catch (err) {
    console.error('inside from Outside', err);
  }
}

async function searchFirst(cep) {
  try {
    const results = await lookupCEP(cep);

    if (results.length !== 0) {
      return results.map(transformToObj);
    }

    return fromOutside(cep);
  } catch (err) {
    console.error('inside searchFirst', err);
  }
}

module.exports = {
  searchFirst,
  fromOutside,
  storeCep,
};
