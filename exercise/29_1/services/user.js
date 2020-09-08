const { users } = require('../models');

async function addUser(username, password) {
  const { insertedId } = await users.add(username, password);
  return { _id: insertedId, username, password };
}

async function getUserByName(username) {
  const { _id, ...user } = await users.getUserByName(username) || {};
  return { id: _id, ...user };
}

module.exports = {
  addUser,
  getUserByName,
};
