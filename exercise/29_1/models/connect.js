require('dotenv/config');
const MongoClient = require('mongodb').MongoClient;

const { MONGO_URL = 'mongodb://localhost:27017', MONGO_DB } = process.env;

async function connect() {
  try {
    const conn = await MongoClient.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return conn.db(MONGO_DB);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

async function connectTo(coll) {
  const db = await connect()
  return db.collection(coll);
}

module.exports = {
  connect,
  connectTo,
};
