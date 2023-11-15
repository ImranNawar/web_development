// Regular expression is basically used to describe pattern of characters. Used for pattern matching
// pattern searching.  Commonly used for validation.

let re;
re = /hello/;
re = /hello/i; // i flag = case insensitive
re = /hello/g; // global search

console.log(re);
console.log(re.source);

/////Basic functions ////////

// exec() -Return result in an array or null
const result = re.exec("hello world");
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test() -Return true or false
const result1 = re.test("Hello");
console.log(result1);

//match() - Return result array or null
const str = "Hello there";
const result2 = str.match(re);
console.log(result);

//search()  -Returns index of the first match if not found returns -1
const str1 = "Jhon Hello there";
const result3 = str1.search(re);
console.log(result3);

//replace() - Return new string with some or all matches of a pattern
const str2 = "Hello there";
const newStr = str2.replace(re, "Hi");
console.log(newStr);
