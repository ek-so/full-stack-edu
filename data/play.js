//just a file to perform in concole operations with database

const db = require("../data/database");

db.connectToDatabase().then(async function () {
  const collectionNumber = await db.getDb().collection("online-shop").count();
  console.log(collectionNumber);
});
