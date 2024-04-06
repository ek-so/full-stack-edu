//ADD an element
let newAnchorElement = document.createElement("a"); //create an element
let parentToInsert = document.getElementById("exercise2"); //get access to the parent
parentToInsert.append(newAnchorElement); //insert new element IN THE END of parent
newAnchorElement.href = "https://www.google.com/";
newAnchorElement.textContent = "Google";
newAnchorElement.target = "_blank";
newAnchorElement.className = "primary";

//REMOVE
document.getElementById("exercise31").remove();
document
  .getElementById("exercise3")
  .removeChild(document.getElementById("exercise32")); //longer way to remove through parent, for OLD browsers

//MOVE
//if we append ALREADY EXISTING element somewhere, it just moves, no need to delete
document
  .getElementById("exercise4")
  .parentElement.append(document.getElementById("exercise4"));

//inner HTML
//textContent is not parsed into DOM elements
document.getElementById("exercise5").innerHTML =
  "Some text plus <strong>importnat</strong> text" +
  "</br> And this line shows how can I add more complex HTML in several lines inside JS.";
