const { posts } = require('../models');

async function getAll() {
  return (await posts.getAll()).toArray();
}

module.exports = {
  getAll,
};
