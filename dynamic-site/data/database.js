const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let mongodbUrl = "mongodb+srv://ekso:0VynB3Src65Nv8vj@cluster0.nybop9t.mongodb.net/?retryWrites=true&w=majority";

if (process.env.MONGODB_URL) {
  mongodbUrl = process.env.MONGODB_URL; 
}

let database;

async function initDatabase() {
  const client = await MongoClient.connect(mongodbUrl);
  database = client.db('100-days-of-code');
}

function getDb() {
  if (!database) {
    throw new Error('No database connected!');
  }

  return database;
}

module.exports = {
  initDatabase: initDatabase,
  getDb: getDb,
};
