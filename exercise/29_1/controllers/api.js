const { Router } = require('express');

const API = Router();

API.route('/posts')
  .get();

API.route('/ping').get((_req, res) => res.send('pong'));

module.exports = API;
