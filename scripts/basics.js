//variables, camel case name convention
let firsttMessage = "This is the JavaScript training page"; // we can use single quotes but with back slash then: 'I⧵'m Kate'
const secondtMessage = "Text never changes"; //const differs from let, coz const won't change in the code



//array
let age = 35;
let userName = "Kate";
let hobbies = ["Sports", "Cooking", "Reading"];
let firstVariable = hobbies[0]; //index starts with 0, not 1 - here it'll be Sports



//object
let userJob = {
  title: "Designer", //index is a number in this array, starting from 0
  place: "Berlin",
  year: "2024",
};
let specificProperty = userJob.title;



//operators
age = 45; //reset variable – no need in let again as we already introduced it
let resultOperation = age - (15 + 45) * 3.5 / 4.1; //float-point number, float
//multiply and division has higher priority without brackets
let resultRemainder = 10 % 4; // 10:4=2.5, or 10:4=2 and 2 (remainder), modulus operator
age++; //the same as age = age + 1;
age--; //age = age - 1;
age += 5; //age = age + 5;
age -= 5; //age = age - 5;
age *= 5; //age = age * 5;
age /= 5; //age = age / 5;
age = 4 ** 3; //age = 4 * 4 * 4

let resultStrings = "Kate" + " " + "Sosedova"; //need to add space, otherwise to words will be glued
console.log(resultStrings);
let resultOfSummOne = "the number" + 2; // age will be 'the number2' => a string
let resultOfSummTwo = 2 + "2"; // '22' => a string! (i.e. the number 2 is treated like a string '2' here)
let resultOfMultiply = "2" * 3; // 6 => a number



//functions
//all variables (even const) INSIDE function are deleted after the function was executed
let adultYears; //define variable
function calculateAdultYears() {
  //define function
  adultYears = age - 18;
}
calculateAdultYears(); //call function

function calculateYearAfter2000() {
  let yearAfter2000 = 2000 + age; //in this case variable exists ONLY INSIDE function
}

function returnVariables(firstParameter, secondParameter) {
  return firstParameter + 1000 - secondParameter; //makes function more reusable, parameter is only accessible inside the function
}
let returnedVariable = returnVariables(1000, 500); //we can also pass other variable, defined earlier, as parameter



//methods
let person = {
  name: "Kate", //Property
  greet() {
    //Method
    console.log("Hello!"); //Outputs this to the developer console, is built-in METHOD itself
  }
};
person.greet();

console.log(person.name.length); //An embedded method to count length
console.log(person.name.toLowerCase());