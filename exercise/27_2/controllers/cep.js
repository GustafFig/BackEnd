const { searchFirst, fromOutside, storeCep } = require('../models/cep');

async function searchInformation(req, res, next) {
  try {
    const { cep } = req.body;

    const ceps = await Promise.race([
      searchFirst(cep),
      fromOutside(cep),
    ]);

    res.render('cepResponse', { ceps });
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
