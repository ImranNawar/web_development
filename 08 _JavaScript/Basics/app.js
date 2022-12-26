// alert("Hello World");

//log to console
console.log("Hello");
console.log("123");
console.log("true");

var greeting = "hello";
console.log(greeting);

console.log([1, 2, 3, 4]);
console.log({ a: 2, b: 4 });

console.table({ a: 2, b: 4 });

console.error("This is some error");
console.warn("This is warning");
console.clear();

console.time("Hello");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.timeEnd("Hello");

////////////////////////////////////////////
//variables
//var, let, const

var name = "Khan";
console.log(name);
name = "jadoon";
console.log(name);

//init var
var greeting;
console.log(greeting);

//letters, numbers, _, $  only characters that can be inside variable
//cannot be start with numbers

//Conventions
//Multi word vars
var firstName = "Khan"; //Camel case
var first_name = "khan"; // Underscore
var FirstName = "Tom"; // Pascal case
var firstname;

//let
let name2 = "jadoon";
console.log(name2);

//CONST
const name3 = "John";
console.log(name3);

// Cannot reassign
// name3 = "sara";

//Have to assign a value
// const greeting2;

const person = {
  name4: "jan",
  age: 21,
};

person.name4 = "sara";
person.age = 22;
console.log(person);

const numbers = [1, 2, 3, 4];
numbers.push(5);

console.log(numbers);

//////////////////////////////////////////
//Data types
//primitve
// String
const name5 = "John Doe";
//Number
const age3 = 32;
//Boolean
const hasKids = true;
//Null
const car = null; //you will get it's type object which is bug
//Undefined
let test;
//Symbols
const sym = Symbol();

//Reference Types - Objects
//Array
const hobbies = ["movies", "music"];
//Object literals
const address = {
  city: "Boston",
  state: "MA",
};

const today = new Date();
console.log(today);

console.log(typeof address);

//////////////////////////////////////////
// Conversion
let val;

//Number to string
val = String(4445);
val = String(4 + 4);
//Bool to string
val = String(true);
//Date to string
val = String(new Date());
//Array to sting
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = true.toString();

//String to number
val = Number("5");
val = Number(true);
val = Number(false);
val = Number("hello");
val = Number([1, 2, 3]);

val = parseInt("100.30");
val = parseFloat("100.30");

//Output
console.log(val);
console.log(typeof val);
// console.log(val.length); //length property only work on sting
console.log(val.toFixed());

/////////////////////////////////////

const num1 = 100;
const num2 = 20;
let result;

//Simple math with numbers
result = num1 + num2;
result = num1 - num2;
result = num1 * num2;
result = num1 / num2;

// Math Object
result = Math.PI;
result = Math.E;
result = Math.round(2.3);
result = Math.ceil(2.3);
result = Math.floor(2.3);
result = Math.sqrt(64);
result = Math.abs(-3);
result = Math.pow(8, 2);
result = Math.min(2, 33, 4, 1, 55);
result = Math.max(2, 33, 4, 1, 55);
result = Math.random();

result = Math.floor(Math.random() * 20 + 1); //between 1 to 20

console.log(result);

////////////////////////////////////////////
const firstName1 = "William";
const lastName = "Jhonson";

let con;

con = firstName1 + lastName;
//Concatenation
con = firstName1 + " " + lastName;

//Append
con += lastName;

//Escaping
con = "that's awesome, I can't wait";

//Lenght
con = firstName.length;

// concat()
con = firstName1.concat(" ", lastName);

// Change case
con = firstName1.toUpperCase();
con = firstName1.toLowerCase();

//charAt
con = firstName1.charAt("2");

//Get last char

//substring()
con = firstName1.substring(0, 4);

//slice()
con = firstName1.slice(-3);
//split()

console.log(con);
/////////////////////////////////////////////
//Template Laterals   (template strings)

///////////////////////////////////
//Create some arrays
const numbers2 = [23, 34, 45, 3, 2, 23];
const numbers3 = new Array(22, 3, 44, 54, 55);
const fruit = ["Apple", "Banana"];
const mixed = [22, "Hello", true, null, { a: 1, b: 2 }, new Date()];

console.log(mixed);

////////////////////////////////////////////////
//Object literals
const person1 = {
  firstName: "Khan",
  lastName: "Jan",
  age: 23,
  email: "khan@io.com",
  hobbies: ["hiking", "sports"],
  address: {
    city: "swabi",
    state: "kpk",
  },
  getBirthDay: function () {
    return 2002;
  },
};

console.log(person1.firstName);

// const today1 = new Date();
// let date;
// date.getDate();
// console.log(date);
