const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://ekso:0VynB3Src65Nv8vj@cluster0.nybop9t.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);
async function run() {
  try {
    await client.connect();
    console.log("Successfully connected to Atlas");
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

use("100-days-of-code");

// Create a new document in the collection.
db.getCollection("online-shop").insertOne({
  name: "test",
});
