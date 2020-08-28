const fetch = require('node-fetch');

async function fetchCeps(cep, state, city, neightborhood, publicPlace) {
  try {
    return await fetch(`http://cep.la/${cep}`, { Accept: 'application/json' });
  } catch (err) {
    console.error(err);
    return { error: true, message: err.message, stack: error.stack };
  }
}

module.exports = {
  fetchCeps,
};
