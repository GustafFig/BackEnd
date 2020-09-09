const { posts } = require('../models');

async function getAll() {
  const allPosts = await posts.getAll();
  return allPosts.toArray();
}

async function addPost(name, text) {
  const { insertedId } = await posts.add(name, text);
  return { insertedId, name, text };
}

module.exports = {
  getAll,
  addPost,
};
