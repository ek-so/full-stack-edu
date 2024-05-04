const hobbies = ["Sports", "Cooking"];
//primitives: numbers, strings, booleans, undefined etc.
//reference values: objects, are stored in more advanced computer memory
//when we store object, like array, we store a POINTER to an array, not value itself, that's why the PUSH method works

hobbies.push("Reading");
console.log(hobbies);

const person = { age: 32 };
function getAdultYears(p) {
//    p.age -= 18;
//    return p.age;
return p.age - 18;
}

console.log(getAdultYears(person));
console.log(getAdultYears({ age: person.age})); //passing a copy of object not to overwrite it, same result
console.log(getAdultYears({...person})); //pulls out all key values of the object and stores in NEW copied object

