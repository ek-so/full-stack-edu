const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://ekso:0VynB3Src65Nv8vj@cluster0.nybop9t.mongodb.net/?retryWrites=true&w=majority";

let database;

const client = new MongoClient(url);

async function connectToDatabase() {
  try {
    await client.connect();
    database = client.db("100-days-of-code");
  } catch (err) {
    console.log(err.stack);
  } 
//finally {
//   await client.close();
//  }
}
//connectToDatabase().catch(console.dir);

function getDb() {
  if (!database) {
    throw new Error("You must connect first!");
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb
};
