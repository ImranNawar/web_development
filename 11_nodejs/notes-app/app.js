const Notes = require("./Notes");

const n = new Notes(); // Create a Notes object

// Insertion: To get data from the user and store it in data.json file
const newData = { id: 3, name: "Islamia" };
n.insert(newData);

// Reading: Read everything from it
const data = n.readFile();
console.log("Read data:", data);

// Searching: Search from data.json based on some number of name
const searchResults = n.search("New Entry");
console.log("Search results:", searchResults);

// Delete by id
const idToDelete = 1;
n.delete(idToDelete);

// Update by id or data in actual file
const idToUpdate = 2;
const updatedData = { name: "Updated Entry" };
n.update(idToUpdate, updatedData);
