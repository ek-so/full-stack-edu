const expressSession = require("express-session");
const mongoDbStore = require("connect-mongodb-session");

function createSessionStore() {
  const MongoDBStore = mongoDbStore(expressSession);

  const store = new MongoDBStore({
    uri: "mongodb+srv://ekso:0VynB3Src65Nv8vj@cluster0.nybop9t.mongodb.net/?retryWrites=true&w=majority",
    databaseName: "100-days-of-code",
    collection: "sessions",
  });

  return store;
}

function createSessionConfig() {
  return {
    secret: "super-secret",
    resave: false,
    saveUninitialized: false,
    store: createSessionStore(),
    cookie: {
      maxAge: 2 * 24 * 60 * 60 * 1000,
    },
  };
}

module.exports = createSessionConfig;
