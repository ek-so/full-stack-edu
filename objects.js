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