// if(something){
//   do something
// } else {
//   do somthing else
// }

const id = 100;

//Equal to
if (id == 100) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}

//Not equal to
if (id != 101) {
  console.log("Correct");
} else {
  console.log("incorrect");
}

//Equal to value and type
if (id === 100) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}

//Not Equal to value and type
if (id !== 100) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}

if (id) {
  console.log("This ID is $(id)");
} else {
  console.log("No Id");
}

//Greater of less than
if (id > 200) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}

//If Else
const color = "yellow";

if (color === "red") {
  console.log("Color is red");
} else if (color === "blue") {
  console.log("Color is blue");
} else {
  console.log("Color is not red or blue");
}

//Logical operators
const name = "Steve";
const age = 20;

if (age > 0 && age < 12) {
  console.log("${name} is a child");
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}
// AND &&
// OR ||

//Ternary operator
console.log(id === 100 ? "Correct" : "Incorrect");

////////////Switch
const color1 = "red";

switch (color1) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  default:
    console.log("Color is not red or blue");
    break;
}

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Thursday";
    break;
  case 4:
    day = "Friday";
    break;
  case 5:
    day = "saturday";
    break;
  case 6:
    day = "wednesday";
    break;
}

console.log("Today is ${day}");
///////////////////////////////////////////
//Function Declaration

function greet(firstName) {
  console.log("Hello " + firstName);
}
greet("Khan");

//Function Expressions
const square = function (x = 3) {
  return x * x;
};

console.log(square());

//immediatley invokable function expressions - iifes
(function () {
  console.log("iife ran..");
})();

const todo = {
  add: function () {
    console.log("Add todo..");
  },
  edit: function (id) {
    console.log("Edit todo ${id}");
  },
};
todo.add();
