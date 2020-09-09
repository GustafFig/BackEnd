require('dotenv/config');
const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const Boom = require('@hapi/boom');
const { users: { getUserByName } } = require('../services');

const { SECRET = 'preguiçaDeCriarUmSegredo' } = process.env;

module.exports = function auth(needAuthorization = true) {
  return rescue(async (req, res, next) => {
    const { authorization: token } = req.headers || {};

    if (!token && needAuthorization) return next(Boom.unauthorized('Cannot find Token'));

    try {
      const decoded = jwt.verify(token, SECRET);

      if (!decoded) return next(Boom.unauthorized('Cannot find needed info'));

      const user = await getUserByName(decoded.username);

      if (!user && needAuthorization) return next(Boom.unauthorized('Cannot find you'));
  
      req.user = user;
  
      next();  
    } catch (err) {
      next(Boom.unauthorized('Token expired'));
    }
  });
}
