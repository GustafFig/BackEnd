const fetch = require('node-fetch');

async function fetchCeps(cep) {
  try {
    const response = await fetch(`http://cep.la/${cep}`, {
      method: 'GET',
      headers: { Accept: 'application/json' }
    });
    console.log('http', response.url, 'Accept:application/json');
    return  await response.json();
  } catch (err) {
    console.error(err);
    return { error: true, message: err.message, stack: error.stack };
  }
}

function format(str) {
  return str ? '/' + str : '';
}

async function fetchByPlaces(state = '', city = '', neightborhood = '', publicPlace = '') {
  try {
    return fetch(
      `http://cep.la${format(state)}${format(city)}${format(neightborhood)}${format(publicPlace)}`,
      { Accept: 'application/json',
    });
  } catch (err) {
    console.error(err);
    return { error: true, message: err.message, stack: error.stack };
  }
}

module.exports = {
  fetchCeps,
  fetchByPlaces,
};
