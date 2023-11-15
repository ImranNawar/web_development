// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol("sym2");

// console.log(typeof sym1);

// console.log(Symbol() === Symbol()); // No two symbols will be same

// Unique object keys   -- main reason for symbol
const KEY1 = Symbol();
const KEY2 = Symbol("sym2");

const myObj = {};

myObj[KEY1] = "Prop1";
myObj[KEY2] = "Prop2";
myObj.KEY3 = "Prop3";
myObj.KEY4 = "Prop4";

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

// Symbols are not enumerable in for ...in
for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({ key: "prop" }));
console.log(JSON.stringify({ [Symbol("sym1")]: "prop" }));
