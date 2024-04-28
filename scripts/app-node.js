const express = require("express");

const app = express();

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
}); //path and function to be executed

app.get("/", function (req, res) {
  res.send("<h1>Hello world!</h1>");
});

app.listen(3000);

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
