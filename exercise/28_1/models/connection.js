require('dotenv/config');
const MongoClient = require('mongodb').MongoClient;

async function connection() {
  const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    const conn = await MongoClient.connect(process.env.MONGO_URL, config);
    return conn.db('cep_lookup');
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
}

async function connectTo(collection) {
  try {
    const db = await connection();
    return db.collection(collection);  
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  connection,
  connectTo,
};
