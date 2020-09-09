const bcrypt = require('bcrypt');

const generateGens = (saltRounds) => new Promise((resolve, reject) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) return reject(err);
    return resolve(salt);
  });
});

const mkHash = (password, salt) => new Promise((resolve, reject) => {
  bcrypt.hash(password, salt, (err, hash) => {
    if (err) return reject(err);
    return resolve(hash);
  });
});

const compare = (password, hash) => new Promise((resolve, reject) => {
  bcrypt.compare(password, hash, (err, result) => {
    if (err) return reject(err);
    return resolve(result);
  });
});

module.exports = {
  generateGens,
  mkHash,
  compare,
};
