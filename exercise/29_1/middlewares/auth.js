require('dotenv/config');
const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const { users: { getUserByName } } = require('../services');

const { SECRET = 'preguiçaDeCriarUmSegredo' } = process.env;

module.exports = function auth(needAuthorization = true) {
  return rescue(async (req, res, next) => {
    const { authorization: token } = req.headers || {};

    if (!token && needAuthorization) return res.status(401).json({ error: 'Cannot find token' });

    const decoded = jwt.verify(token, SECRET);

    if (!decoded) return res.status(401).json({ error: 'Cannot find needed info' });

    const user = await getUserByName(decoded.username);

    if (!user && needAuthorization) return res.staut(401).json('Cannot find you');

    req.user = user;

    next();
  });
}
