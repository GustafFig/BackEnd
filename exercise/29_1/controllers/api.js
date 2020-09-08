const { Router } = require('express');
const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const { users, posts } = require('../services');
const auth = require('../middlewares/auth');

const API = Router();

const { SECRET = 'preguiçaDeCriarUmSegredo' } = process.env;

const tokenConfig = {
  expiresIn: 60,
  algorithm: 'HS256',
};

async function createUser(req, res) {
  const { username, password } = req.body;

  if (!username, !password) return res.status(400).json({ error: 'invalid data' });

  const newUser = await users.addUser(username, password);

  return res.status(201).json(newUser);
}

async function login(req, res) {
  const { username, password } = req.body || {};

  if (!username || !password) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  try {
    const user = await users.getUserByName(username);

    if (!user) return res.status(401).json({ error: 'user not find' });
    if (password !== user.password) return res.status.json({ error: 'Wrong password' });

    const token = jwt.sign({ data: user }, SECRET, tokenConfig);

    return res.status(200).json({ token, user });
  } catch (err) {
    return res.status(401).json({ error: 'no token' });
  }
}

async function getPosts(req, res) {
  const allPosts = await posts.getAll();
  console.log('allPosts', allPosts)
  res.status(200).json({ posts: allPosts });
}

API.route('/users')
  .post(rescue(createUser));

API.route('/login')
  .post(rescue(login));

API.route('/posts')
  .get(auth(true), rescue(getPosts));

API.route('/ping').get((_req, res) => res.send('pong'));

module.exports = API;
