// A look at the window object

//Window methods / Objects / Properties
console.log(123);

//Alert
window.alert("Hello world");

// Prompt
const input = prompt();
alert(input);

//Confirm
if (confirm("Are you sure")) {
  console.log("Yes");
} else {
  console.log("No");
}

let va_l;
// outer height and width
va_l = window.outerHeight;
va_l = window.outerWidth;
// inner heigth and width
va_l = window.innerHeight;
va_l = window.innerWidth;

//Scroll points
val = window.scrollY;

//Location Object
va_l = window.location;
va_l = window.location.hostname;
va_l = window.location.port;

// Redirect
// window.location.href = "http://google.com";

//Reload
//window.location.reload();

//History Object
window.history.go(-1);
va_l = window.history.length;

//Navigator Object
va_l = window.navigator;
va_l = window.navigator.appVersion;
va_l = window.navigator.plateform;
console.log(va_l);

///////////////////////
// Global Scope
var a = 1;
let b = 2;
const c = 3;

console.log("Global Scope: ", a, b, c);
// Function Scope

// Block Scope
