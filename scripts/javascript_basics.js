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
  title: "Designer",
  place: "Berlin",
  year: "2024",
};
let specificProperty = userJob.title;


//operators
age = 45; //reset variable – no need in let again as we already introduced it
let resultOperation = age - 15 + 45;
letResultTwo = age * 3;


//functions
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
alert(returnedVariable);

//excercise