const MongoClient = require('mongodb').MongoClient;
require('dotenv/config');

const { url = 'mongodb://127.0.0.1:27017' }  = process.env;

const connect = async () => MongoClient.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((conn) => conn.db('products'))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

module.exports = connect;
