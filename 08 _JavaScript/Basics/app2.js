// For loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}
// continue; go to the next iteration
// break; stop the loop

//while loop
let i = 0;
while (i < 10) {
  console.log("Number" + i);
  i++;
}

// Do while loop

// let i = 0;
do {
  console.log("Number" + i);
  i++;
} while (i < 10);

const cars = ["Ford", "Chevy", "Honda"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// for each loop
cars.forEach(function (car) {
  console.log(car);
});

// Map
const users = [
  { id: 1, name: "john" },
  { id: 2, name: "Sare" },
  { id: 3, name: "Karen" },
];

const ids = users.map(function (user) {
  return user.id;
});

console.log(ids);
