const grade = +prompt("enter your grade");

switch (true) {
  case grade >= 80:
    alert("distinction");
    break;

  case grade >= 70 && grade < 80:
    alert("first division");
    break;

  case grade >= 60 && grade < 70:
    alert("Second division");
    break;

  case grade < 60:
    alert("fail");
    break;

  default:
    alert("invalid input");
}

// const gender = prompt("enter your gender(m/f)");

// if (gender === "m") {
//   console.log("youre male");
// } else {
//   console.log("youre female");
// }

// const day = +prompt("enter day 1-7");

// switch (day) {
//   case 1:
//     alert("sunday");
//     break;

//   case 2:
//     alert("monday");
//     break;
// }
