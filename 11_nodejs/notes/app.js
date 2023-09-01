const uuid = require("uuid");
const shuffle = require("shuffle-array");


console.log(uuid.v4());

collection = ["Amir", "Ali", "Aqib"];
shuffle(collection);
console.log(collection);