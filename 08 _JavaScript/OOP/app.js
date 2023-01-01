//Person Constructor
// this keyword refers to the current instanse of the object
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);

  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}
const khan = new Person("Khan", "3-30-2002");
console.log(khan);
console.log(khan.calculateAge());
