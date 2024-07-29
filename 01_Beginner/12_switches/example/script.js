let day = 5;
switch (day) {
  case 1:
    console.log("Its Monday");
    break;
  case 2:
    console.log("Its Tuesday");
    break;
  case 3:
    console.log("Its Wednesday");
    break;
  case 4:
    console.log("Its Thursday");
    break;
  case 5:
    console.log("Its Friday");
    break;
  case 6:
    console.log("Its Saturday");
  case 7:
    console.log("Its Sunday");
  default:
    console.log("Day is not valid");
}

// ---------------------------------

let testScore = 71;
let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = "A";
    break;
  case testScore >= 80:
    letterGrade = "B";
    break;
  case testScore >= 70:
    letterGrade = "C";
    break;
  case testScore >= 60:
    letterGrade = "D";
    break;
  default:
    letterGrade = "F";
}

console.log("Letter Grade", letterGrade);

// ---------------------------------

let day2 = 5;

switch (day2) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Day is not valid");
}
