const student =[
{
  name: "John Doe",
  rollno: "2023001",
  gpa: 3.75,
  isProgrammer: true,
  courses: ["Mathematics", "Computer Science", "Physics"],
  address: {
    street: "123 Main Street",
    city: "Anytown",
    state: "Example State",
    zipcode: "12345"
  }
},
{
  name: "Alice Johnson",
  rollno: "2023002",
  gpa: 3.9,
  isProgrammer: false,
  courses: ["English", "Biology", "History"],
  address: {
    street: "456 Elm Street",
    city: "Smallville",
    state: "Example State",
    zipcode: "54321"
  }
},
{
  name: "Bob Smith",
  rollno: "2023003",
  gpa: 3.2,
  isProgrammer: true,
  courses: ["Chemistry", "Computer Science", "Mathematics"],
  address: {
    street: "789 Oak Avenue",
    city: "Metroville",
    state: "Example State",
    zipcode: "98765"
  }
},
{
  name: "Emily Brown",
  rollno: "2023004",
  gpa: 3.6,
  isProgrammer: false,
  courses: ["Art", "Psychology", "Sociology"],
  address: {
    street: "234 Maple Lane",
    city: "Townsville",
    state: "Example State",
    zipcode: "23456"
  }
},
{
  name: "David Miller",
  rollno: "2023005",
  gpa: 3.1,
  isProgrammer: true,
  courses: ["Physics", "Computer Science", "Economics"],
  address: {
    street: "567 Pine Road",
    city: "Villageville",
    state: "Example State",
    zipcode: "87654"
  }
},
{
  name: "Sophia Lee",
  rollno: "2023006",
  gpa: 3.8,
  isProgrammer: true,
  courses: ["Computer Science", "Mathematics", "Chemistry"],
  address: {
    street: "789 Cedar Street",
    city: "Countryside",
    state: "Example State",
    zipcode: "76543"
  }
}
]


let sum=0;
for(let i=0; i<student.length; i++){
  document.write(student[i].name + "<br />");
  sum += student[i].gpa;
}
document.write(`Average GPA: ${sum/student.length}`);