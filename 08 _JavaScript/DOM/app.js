/*
//Examining the Dom object
let val;

val = document;
val = document.all;
val = document.all[0];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;

val = document.links;
val = document.links[0];
val = document.links[3].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute("src");

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function (script) {
  console.log(script.getAttribute("src"));
});
console.log(val);
*/

/////////////////////////////////////////////////////

//DOM selectors for single elements

/*
//document.getElementById();
console.log(document.getElementById("task-title"));

// Get things from the element
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").class);

// Change styling
document.getElementById("task-title").style.background = "#333";
document.getElementById("task-title").style.color = "#fff";
// document.getElementById("task-title").style.display = "none";
document.getElementById("task-title").style.padding = "5px";

// Change Content
document.getElementById("task-title").textContent = "Task List";
document.getElementById("task-title").innerText = "My Tasks";
*/

////////////////////////////////////////////
/*
//document.querrySelector()
console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));

document.querySelector("li").style.color = "red";
document.querySelector("ul li").style.color = "blue";

document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(3)").style.color = "yellow";
document.querySelector("li:nth-child(odd)").style.background = "#ccc";
*/

////////////////////////////////////////////////
/*
//DOM selectors for multiple elements

//document.getElementByClassName
const items = document.getElementsByClassName("collection-item");
console.log(items);
console.log(items[0]);
items[0].style.color = "red";
items[3].textContent = "Hello";

//document.getElementByTagName

//document.querrySelectorAll
const items1 = document.querySelectorAll("ul.collection li.collection-item");

items1.forEach(function (item, index) {
  item.textContent = `${index}: Hello`;
});
console.log(items1);

*/
/*
// Traversing
let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;
//Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

//Get children element nodes
val = list.children;
val = list.children[1];
// Get parent node
val = listItem.parentNode;

//Get next sibling
val = listItem.nextSibling;

console.log(val);
*/

// Local Storage and Session Storage

// set Local storage item
// localStorage.setItem("name", "Khan");

// set Session Storage item
// sessionStorage.setItem("name", "Jan");

//remove from storage
// localStorage.removeItem("name");

// localStorage.removeItem("task");

// get from storage
// const name = localStorage.getItem("name");

// // clear local storage
// localStorage.clear();

// console.log(name);

document.querySelector("form").addEventListener("submit", function (e) {
  const task = document.getElementById("task").value;

  let tasks;

  if (localStorage.getItem("task") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("Task saved");

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach(function (task) {
  console.log(task);
});
