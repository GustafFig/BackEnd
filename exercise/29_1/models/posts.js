const { connectTo } = require('./connect');

async function add(name, text) {
  const postsTable = await connectTo('posts');
  return postsTable.insertOne({ name, text });
}

async function getAll() {
  const postsTable = await connectTo('posts');
  return postsTable.find();
}

module.exports = {
  add,
  getAll,
};
