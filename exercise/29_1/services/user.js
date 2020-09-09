const { users } = require('../models');

async function addUser(username, password, isAdmin) {
  const { insertedId } = await users.add(username, password, isAdmin);
  return { _id: insertedId, username, password, isAdmin };
}

async function getUserByName(username) {
  const { _id, password, isAdmin } = await users.getUserByName(username) || {};
  return { id: _id, username, password, isAdmin };
}

module.exports = {
  addUser,
  getUserByName,
};
