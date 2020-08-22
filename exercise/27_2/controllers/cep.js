const { lookupCEP, fromOutside } = require('../models/cep');

async function searchInformation(req, res) {
  try {
    const { cep } = req;
    const result = await lookupCEP(cep);
  
    if (result) {
      console.log('result', result.fetchAll());
      return res.send(result.fetchAll());
    }
    const outsideResult = await fromOutside(cep);
    console.log(outsideResult);
    res.send(outsideResult);
  } catch (err) {
    console.error(err);
    next('Seek information');
  }
}

function errCep(err, _req, res, _next) {
  console.log('err enviado', err)
  res.render('errCep', { message: err });
}

module.exports = {
  searchInformation,
  errCep,
};
