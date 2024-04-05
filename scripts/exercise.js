let courseName = "100 days of code";
let coursePrice = 3000;
let courseGoals = ["knowledge", "practice", "certificate"];
// alert(courseGoals + courseName + coursePrice); combines all results in one alret

let allCourseInfo = {
  name: courseName,
  price: coursePrice,
  goals: courseGoals,
};

function accessItem(array, arrayIndex) {
  let arrayItem = array[arrayIndex];
  return arrayItem;
}

let secondGoal = accessItem(allCourseInfo.goals, 1);

//alert(secondGoal);
