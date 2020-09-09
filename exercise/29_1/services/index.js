const users = require('./user');
const posts = require('./posts');
const { compare } = require('./password');

module.exports = {
  users,
  posts,
  comparePasswords: compare,
};
