// ES 5
const fs = require('fs')

// // ES 6
// import fs from 'fs-extra';

const obj = {
  "id": "1",
  "name": "Imran",
  "address": "Swabi"
}

// READ
fs.readFile("data.txt", "utf-8", (err,
  data) => {
    console.log(data)
  })

// WRITE
fs.writeFile("data.txt", JSON.stringify(obj), (err, data)=>{
  if(err) return;
  console.log("File is saved");
})

// READ
fs.readFile("data.txt", "utf-8", (err,
  data) => {
    const o = JSON.parse(data);
    console.log(o);
  })