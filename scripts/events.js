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



//EVENT object exists for every event we are listening to
function seeEventInner (event) {
    console.log(event); //we'll see event properties for INPUT event
    //let enteredText = myInput.value; (that's what we used above)
    //let enteredText = event.target.value; (that gives the same result)
    //let enteredText = event.data; (this is getting text from input letter by letter, separately)
}

myInput.addEventListener("input", seeEventInner);