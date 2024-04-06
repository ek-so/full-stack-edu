//BUTTON
let myButton = document.querySelector("div > button");
let paragraphContent = document.getElementById("exercise61");

function changeParagraphText() {
  paragraphContent.textContent = "Button is clicked!";
}

myButton.addEventListener("click", changeParagraphText);
//no parenthesis for function, otherwise it will be executed immediately



//INPUT
let myInput = document.querySelector("div > input");

function retrieveUserInput() {
  let enteredText = myInput.value;
  document.getElementById("exercise62").textContent = enteredText;
}

myInput.addEventListener("input", retrieveUserInput);
