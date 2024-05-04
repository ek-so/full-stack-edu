const fs = require("fs"); //Node feature

function readFile() {
  const fileData = fs.readFileSync("data.json"); //when error occures, function stops at this line
  console.log("Hi there");
}

function readFile2() {
  try { //allows errors not to break main function, ang go further
    const fileData = fs.readFileSync("data.json");
  } catch {
    console.log("Error occured");
  }
  console.log("Hi there");
}

readFile2();
