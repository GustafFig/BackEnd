const { users } = require('../models');
const { mkHash, generateGens } = require('./password');

async function addUser(username, password, isAdmin) {
  try {
    const gen = await generateGens(10);
    const hash = await mkHash(password, gen);
    const { insertedId } = await users.add(username, hash, isAdmin);
    return { _id: insertedId, username, password, isAdmin };  
  } catch (err) {
    console.error(err);
    return { error: true, message: 'could not create user' };
  }
}

async function getUserByName(username) {
  const { _id, password, isAdmin } = await users.getUserByName(username) || {};
  return { id: _id, username, password, isAdmin };
}

module.exports = {
  addUser,
  getUserByName,
};
