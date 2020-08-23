const { lookupCEP, fromOutside, storeCep } = require('../models/cep');

async function searchInformation(req, res, next) {
  try {
    const { cep } = req.body;
    const result = await lookupCEP(cep);
    if (result.length !== 0) {
      return res.render('cepResponse', { ceps: result });
    }
    
    const outsideResult = await fromOutside(cep);
    await storeCep(outsideResult);
    res.render('cepResponse', { ceps: outsideResult });
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
