function greetUser(greetingPrefix, userName = "user") {
  //= default value, if we haven't passed a value like Max
  console.log(greetingPrefix + " " + userName + " !"); //parameters without default value are NOT optional, we get undefined if not pass them
  console.log(`${greetingPrefix} ${userName} !`); //template literals, using backticks - same result
}

greetUser("Hi", "Max"); //more specific value overriedes default value
greetUser("Hello");

function sumUp(numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number; //result = result + number
  }
  return result;
}

console.log(sumUp([1, 5, 10, 11]));

function sumUp2(...numbers) {
  //special operator ... says function accepts any amount of parameters, which will be merged into array automatically
  let result = 0;
  for (const number of numbers) {
    result += number; //result = result + number
  }
  return result;
}

console.log(sumUp2(1, 5, 10, 11)); //same result, but I pass just numbers, not array

const inputNumbers = [1, 5, 10, 11, 20, 31];

function sumUp3(...numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number; //result = result + number
  }
  return result;
}

console.log(sumUp3(...inputNumbers)); //we convert vice versa, array into undividual numbers

const person = {
  //object
  name: "Max",
  age: 32,
};

console.dir(sumUp);
//works in a browser console, function is an object too (contains keys like arguments, caller, length etc.)
// sumUp.someProperty = we can add properties to functions too
