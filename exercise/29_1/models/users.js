const { connectTo } = require('./connect');

async function add(username, password, isAdmin = false) {
  const usersTable = await connectTo('users');
  return usersTable.insertOne({ username, password, isAdmin });
}

async function getUserByName(username) {
  const usersTable = await connectTo('users');
  return usersTable.findOne({ username });
}

module.exports = {
  add,
  getUserByName,
};
