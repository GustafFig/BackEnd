require('dotenv/config');
const rescue = require('express-rescue');
const Boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const { users: { getUserByName } } = require('../services');

const { SECRET = 'preguiçaDeCriarUmSegredo' } = process.env;

module.exports = function adminAuthorization(needAuthorization = true) {
  return rescue(async (req, _res, next) => {
    const { authorization: token } = req.headers || {};

    if (!token && needAuthorization) return next(Boom.unauthorized('Cannot find admin Token'));

    try {
      const decoded = jwt.verify(token, SECRET);

      if (!decoded) return next(Boom.unauthorized('Cannot find needed admin info'));

      const { data } = decoded;
      const user = await getUserByName(data.username);

      if (!user && needAuthorization) return next(Boom.unauthorized('Cannot find you as admin'));
      console.log(user)
      if (!user.isAdmin || !data.isAdmin) return next(Boom.unauthorized('You are not an admin'));

      req.user = { isAdmin: true, user };
      return next();
    } catch (err) {
      console.error(err);
      return next(Boom.unauthorized('Admin Token expired'));
    }
  });
}
