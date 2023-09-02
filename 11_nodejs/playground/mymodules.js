const uuid = require('uuid');
const KeyCode = require("keycode-js"); //used in frontend
// const chalk = require("chalk"); //work only in es 6 , used to look terminal good
const _ = require("lodash");


// console.log(uuid.v4());  //generate random id
// console.log("imran+" + uuid.v4());


let words = ['sky', 'wood', 'forest', 'pear', 'ocean']
console.log(_.first(words));
console.log(_.nth(words, 2));