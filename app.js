const path = require("path");

const express = require("express");

const db = require("./data/database");

const authRoutes = require("./routes/auth.routes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); //dirname is available thanks to require path

app.use(express.static("public")); //we serve this folder separately for the user
app.use(express.urlencoded({ extended: false })); //built-in middleware function in Express. It parses incoming requests with URL-encoded payloads and is based on a body parser.

app.use(authRoutes);

db.connectToDatabase()
  .then(function () {
    app.listen(3000);
    console.log("Connected to DB");
  })
  .catch(function (error) {
    console.log("Failed to connect to DB");
    console.log(error);
  });
