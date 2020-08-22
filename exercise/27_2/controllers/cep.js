const { lookupCEP, fromOutside } = require('../models/cep');

async function searchInformation(req, res, next) {
  try {
    const { cep } = req;
    const result = await lookupCEP(cep);
    if (result.length === 0) return res.send(result);
    
    const outsideResult = await fromOutside(cep);
    res.send(outsideResult);
  } catch (err) {
    console.error(err);
    next('error ao procurar informação');
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
