// Destructuring  Assignment

let a, b;
[a, b] = [100, 200];

// Rest Pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];
console.log(rest);

({ a, b } = { a: 100, b: 200, c: 400, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 400, d: 400, e: 500 });

console.log(a, b);
console.log(rest);

//Array Destructuring

const people = ["Khan", "Jan", "Laal"];
const [person1, person2, person3, person4] = people;

console.log(person1, person2, person3);

// Parse array returned from function
function getPeople() {
  return ["Khan", "Jan", "Laal"];
}
let person11, person22, person33;
[person11, person22, person33] = getPeople();
console.log(person11, person22, person33);

// Object Destructuring
const person = {
  name: "Laal",
  age: 22,
  city: "Peshawar",
  gender: "Male",
};

// Old ES5
// const name = person.name,
//   age = person.age,
//   city = person.city;

// New ES6 Destrucutring
const { name, age, city } = person;
console.log(name, age, city);
