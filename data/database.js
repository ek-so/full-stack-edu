const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function initDb() {
  const client = await MongoClient.connect("mongodb+srv://ekso:0VynB3Src65Nv8vj@cluster0.nybop9t.mongodb.net/?retryWrites=true&w=majority");
  database = client.db('100-days-of-code');
}

function getDb() {
  if (!database) {
    throw new Error('Database not connected!');
  }

  return database;
}

module.exports = {
  initDb: initDb,
  getDb: getDb
};