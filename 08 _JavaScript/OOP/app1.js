//ES6 classes
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  getsMarried(newLastName) {
    this.lastName = newLastName;
  }
}

const mari = new Person("Mary", "Jan", "5-14-2003");

mari.getsMarried("lal");
console.log(mari);

/////////////////////////////////////////////////
// sub class
class Person1 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const khan = new Customer("Khan", "Jan", "555-555-5555", "Standard");

console.log(khan.greeting());
console.log(Customer.getMembershipCost());
