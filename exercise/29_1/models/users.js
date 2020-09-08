const { connectTo } = require('./connect');

async function add(username, password) {
  const usersTable = await connectTo('users');
  return usersTable.insertOne({ username, password });
}

async function getUserByName(username) {
  const usersTable = await connectTo('users');
  return usersTable.findOne({ username });
}

module.exports = {
  add,
  getUserByName,
};
