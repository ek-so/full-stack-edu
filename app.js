const path = require("path");

const express = require("express");

const db = require("./data/database");

const authRoutes = require("./routes/auth.routes");
const database = require("./data/database");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); //dirname is available thanks to require path

app.use(express.static("public")); //we serve this folder separately for the user

app.use(authRoutes);

db.connectToDatabase()
  .then(function () {
    app.listen(3000);
    console.log("Connected to DB")
  })
  .catch(function (error) {
    console.log("Failed to connect to DB");
    console.log(error);
  });
