// const sayHello = function () {
//   console.log("Hello");
// };

// const sayHello = () => {
//   console.log("Hello");
// };

// One line function does not need braces
// const sayHello = () => console.log("Hello");

// One line returns
// const sayHello = () => "Hello";

// same as above
// const sayHello = function () {
//   return "Hello";
// };

// const sayHello = () => ({ msg: "hello" });

//single parameter does not need parenthesis
// const sayHello = (name) => console.log(`Hello ${name}`);

// sayHello("Brad");

const users = ["Nathan", "Jhon", "William"];

// const nameLengths = users.map(function (name) {
//   return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// Shortest
const nameLengths = users.map((name) => name.length);

console.log(nameLengths);
