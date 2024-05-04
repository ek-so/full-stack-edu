const job = { title: "Dev", location: "NY", salary: 50000 }; //manually described options for object
console.log(job);

console.log(new Date().toISOString());
//Date is constructor function or class

class Job {
  //automatically created object, blueprint. ususally starts withuppercase
  constructor(jobTitle, place, salary) {
    //adds method to a class, tells how to constract object
    this.title = jobTitle; //this refers to the future object to be created
    this.location = place;
    this.salary = salary;
  }
}

const developer = new Job("Developer", "NY", 50000); //utilize blueprint to create an object
console.log(developer);


class Job2 {
    constructor(jobTitle, place, salary) {
      //adds method to a class, tells how to constract object
      this.title = jobTitle; //this refers to the future object to be created
      this.location = place;
      this.salary = salary;
    }
    describe () {
        console.log(`I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`);
    }//method adding
  };

const cook = new Job2("cook", "LA", 10000); //utilize blueprint to create an object
cook.describe(); //manually added method

const input = ['Kate', 'Sossedova'];
const firstName = input[0];
const lastName = input[1];
const [first, last] = input; //destructure array; pulls vaues our of array, equvivalent to const first = input[0] etc.
console.log(first);

const { title: jTitle, location: jLocation } = job; //destructure object
//jTitle = job.title; //gives same result
console.log(jTitle);