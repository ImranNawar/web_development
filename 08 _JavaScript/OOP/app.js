//Person Constructor
/*
// this keyword refers to the current instanse of the object
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);

  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}
const khan = new Person("Khan", "3-30-2002");
console.log(khan);
console.log(khan.calculateAge());
*/
/////////////////////////////////////////////
//String
/*
const name1 = "Khan";
const name2 = new String("Khan"); //string as an object

// console.log(name2);
console.log(typeof name2);

if (name2 === "Khan") {
  console.log("YES");
} else {
  console.log("NO");
}

//Number
const num1 = 5;
const num2 = new Number(5);

//Boolean
const bool1 = true;
const bool2 = new Boolean(true);

//Function
const getSum1 = function (x, y) {
  return x + y;
};

const getSum2 = new Function("x", "y", "return 1+1");

console.log(getSum2(1, 1));

// Object
const john1 = { name: "Khan" };
const john2 = new Object({ name: "Khan" });
console.log(john2);

//Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

console.log(arr2);

//Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp("\\w+");
console.log(re2);
*/
//////////////////////////////////////////////
//Prototypes
/*
// Each object in javascript has prototype and prototype is an object itself

//Person Constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);

  // this.calculateAge = function () {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

// calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const khan = new Person("Khan", "Jan", "3-30-2002");

console.log(khan);
console.log(khan.calculateAge());
console.log(khan.hasOwnProperty("getFullName"));

*/
// Prototypal Inheritance
/*
// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
  return `hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("khan", "Jan");
console.log(person1.greeting());

// customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

//Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

//Make cusotmer.prototype return Customer()
Customer.prototype.constructor = Customer;
// create cusotmer
const customer1 = new Customer("Khan", "Jan", "111-111-1111", "Standard");
console.log(customer1);
//Customer greeting
Customer.prototype.greeting = function () {
  return `hello there ${this.firstName} ${this.lastName} welcome to our company`;
};
console.log(customer1.greeting());
*/
