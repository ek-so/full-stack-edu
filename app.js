const path = require("path");

const express = require("express");
const csrf = require("csurf");
const expressSession = require('express-session');

const createSessionConfig = require('./config/session');
const db = require("./data/database");
const addCsrfTokenMiddleware = require('./middlewares/csrf-token');
const errorHandlerMiddleware = require("./middlewares/error-handler");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); //dirname is available thanks to require path

app.use(express.static("public")); //we serve this folder separately for the user
app.use(express.urlencoded({ extended: false })); //built-in middleware function in Express. It parses incoming requests with URL-encoded payloads and is based on a body parser.

const sessionConfig = createSessionConfig();

app.use(expressSession(sessionConfig));
app.use(csrf()); //need to be done before request reaches routes; checks that all requests have tokens

app.use(addCsrfTokenMiddleware); //need to be added after csrf because it relies on locals that are included there into a session

app.use(authRoutes);

app.use(errorHandlerMiddleware);

db.connectToDatabase()
  .then(function () {
    app.listen(3000);
    console.log("Connected to DB");
  })
  .catch(function (error) {
    console.log("Failed to connect to DB");
    console.log(error);
  });
