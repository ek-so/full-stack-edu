const myInput = document.querySelector(".form-element");
const lengthCount = document.getElementById("count");
//even if we change some part of the object, the object itself (hence the const variable) won't change
const lengthMax = myInput.maxLength;

function updateCount(event) {
  //access to event from input listener
  let enteredText = event.target.value;
  let lengthEntered = enteredText.length; //counts amount of symbols entered
  let remainingLength = lengthMax - lengthEntered;
  lengthCount.textContent = remainingLength;
}

myInput.addEventListener("input", updateCount);

lengthCount.style.color = "rgb(210, 81, 0)";
myInput.classList.add("warning");