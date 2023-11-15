let re;
// Literal characters
re = /hello/;
re = /hello/i;

//****************************************** */

// Meta character symbols
re = /^h/i; //Must start with
re = /d$/i; //Must ends with
re = /^hello$/i; //Must begin and end with
re = /h.llo/i; // Matches any one  character
re = /h*llo/i; //Matches any character ) or more times
re = /gra?e?y/i; // Optional character
re = /gre?a?y\?/i; // Escape character

//******************************************** */

// Brackets [] - Character sets
re = /gr[ae]y/i; //Must be an a or b
re = /[GF]ray/i; //Must be a G or F
re = /[^GF]ray/i; //Match anything except a G or F
re = /[A-Z]ray/; //Match any uppercase letters
re = /[a-z]ray/; //Match any lowercase letters
re = /[A-Za-z]ray/; //Match any letters
re = /[0-9][0-9]ray/; //Match any digit

//****************************************** */

// Braces {} - Quantifiers
re = /Hel{2}o/i; //Must occur exactly  {m} amount of times
re = /Hel{2,4}o/i; //Must occur exactly  {m} amount of between times
re = /Hel{2,}o/i; //Must occur at least {m} times

//Paranthesis () - Grouping
re = /^([0-9]x){3}$/;

//********************************************* */

// Shorthand Character Classes
re = /\w/; // Word character  - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // Non word character
re = /\d/; //Match any digit
re = /\d+/; //Match any digit 0 or more times
re = /\D/; //Match any non digit
re = /\s/; //Match white space char
re = /\S/; //Match non white space char
re = /\Dell\b/; //Word boundry

//******************************************* */

//Assertions
re = /x(?=y)/; //Match x only if followed by y
re = /x(?!y)/; //Match x only if Not followed by y

// String to match
const str = "Dello, welcome to dell ";

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);
