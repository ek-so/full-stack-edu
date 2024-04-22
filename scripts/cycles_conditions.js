//CONTROL structures – condition (what to do) + loop (what to do until condition is met)

const myName = "Kate";
if (myName === "Kate") {
  //boolean values as a condition
  console.log("Name is Kate");
} else if (myName === "John") {
  console.log("Name is John");
} else {
  console.log("Name is neither Kate, nor John");
}

let isTrue = false;
if (!isTrue) {
  //here we shorten a row (isTrue === false), meaning is the same
  console.log("It is false");
} //we can check this way if the variable was specified at all (if it exists and not empty, not zero)

for (let i = 0; i < 10; i++) {
  //i stands for iteraton, usual variable; i++ is same as i + 1
  console.log(i);
}

const users = ["Max", "Anna", "John"];
for (const oneUser of users) {
  //access arrays
  console.log(oneUser);
}

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
} //does the same; was used when there was no for..of option

const someUser = {
  name: "Max",
  age: 32,
  isAdmin: true,
};
for (keyName in someUser) {
  //access objects
  console.log(keyName);
  console.log(someUser[keyName]); //the same as if I would say someUser.name, only the key is dynamically changing
}

// let isFinished = true;
// while (!isFinished) {
//   // while;
//   isFinished = confirm("Do you want to open the page?"); //if user selects yes, variable becomes true, and modal closes
// }

//CALCULATOR (SUM)
const calculateSumButton = document.querySelector("#summarize button");

function calculateSum() {
  const userNumberInput = document.querySelector("#summarize input").value;
  let sumUpToNumber = 0;
  for (let i = 0; i <= userNumberInput; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }
  document.querySelector("#summarize p").textContent =
    "The result of summing up all numbers up to the entered one is " +
    sumUpToNumber;
}

calculateSumButton.addEventListener("click", calculateSum);

//HIGHLIGHTING
const highlightButton = document.querySelector("#highlighting button");

function highltghtLinks() {
  const allLinks = document.querySelectorAll("#highlighting a");
  for (oneLink of allLinks) {
    oneLink.className = "tint2";
  }
}

highlightButton.addEventListener("click", highltghtLinks);

//DISPLAY USER DATA
const displayButton = document.querySelector("#display button");
const parentList = document.querySelector("#display ul");
const userDataObject = {
  name: "Kate",
  age: 35,
};

function displayData() {
  parentList.innerHTML = ""; //not to add all the data many times when clickking the button

  for (const key in userDataObject) {
    const newListElement = document.createElement("li");
    newListElement.textContent = key.toUpperCase() + ": " + userDataObject[key];
    parentList.append(newListElement);
  }
}

displayButton.addEventListener("click", displayData);

//ROLL THE DICE
const rollButton = document.querySelector("#roll button");
const targetInput = document.querySelector("#roll input");
const parentListTwo = document.querySelector("#roll ul");
const outputNumberOfRolls = document.querySelector("#roll p");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
  //make value from 1 to 6 and round it to decimal numbers. Plus add 1, because otherwise it is btween 0 and 5
}

function getNumberOfRolls() {
  const targetNumber = +targetInput.value; //get entered number and CONVERT it into a number right away
  parentListTwo.innerHTML = ""; //clear parent list

  let hasRolledTarget = false; //find out if we rolled a target already (initially no)
  let numberOfRolls = 0;

  if (targetNumber > 0) {
    //added here this condition, otherwise if the input is empty, we have infinite cycle: dice never throw 0
    while (!hasRolledTarget) {
      //if we haven't rolled target yet
      const rolledNumber = rollDice();
      // if (rolledNumber === targetNumber) {
      //     hasRolledTarget = true;
      // }
      numberOfRolls++; //count each roll
      let newListElement = document.createElement("li");
      newListElement.textContent = "Roll number " + numberOfRolls;
      parentListTwo.append(newListElement);
      hasRolledTarget = rolledNumber === targetNumber; // shortened way to assign to hasRolledTarget the result of comparison (true or false)
    }
  }

  outputNumberOfRolls.textContent =
    "It took us " + numberOfRolls + " rolls to throw the entered number.";
}

rollButton.addEventListener("click", getNumberOfRolls);
