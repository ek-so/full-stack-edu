const fs = require("fs"); //built in node JS package, should be required first, before 3rd party
const path = require("path"); //describes path for each operating system
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
}); //path and function to be executed

app.get("/", function (req, res) {
  res.send(
    '<form action="/store-user" method="POST"><label>Your name</label><input type="text" name="username"><button>Submit</button></form>'
  );
});

app.post("/store-user", function (req, res) {
  const userName = req.body.username;
  const filePath = path.join(__dirname, "data", "users.json"); //holds project directory path
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);
  existingUsers.push(userName);
  fs.writeFileSync(filePath, JSON.stringify(existingUsers));
  res.send("<h1>Username stored!</h1>");
});

app.get("/users", function (req, res) {
  const filePath = path.join(__dirname, "data", "users.json"); //holds project directory path
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  let responseData = '<ul>';

  for (const user of existingUsers) {
    responseData += "<li>" + user + "</li>"; //+= means just responseData = responseData + smth
  }

  responseData += '</ul>';

  res.send(responseData);
});

app.listen(3000);

//-----------------------------------------------

//JUST USING NODE JS:

//const http = require("http");

//function handleRequest(request, response) {
//  if (request.url === "/currenttime") {
//    //localhost:3000/currenttime
//    response.statusCode = 200;
//    response.end("<h1>" + new Date().toISOString() + "</h1>");
//  } else if (request.url === "/") {
//    //localhost:3000 sends request to port 80 (default), 3000 is not typical, that s whz we choose it
//    response.statusCode = 200;
//    response.end("<h1>Hello world!</h1>");
//  }
//}

//const server = http.createServer(handleRequest);
//server.listen(3000);
