//object

//creating an object

// 1. Object literal method
// {...} - keys-value pair
// const school = {
//   name: "DAV",
//   location: "Delhi",
//   year: 1971,
//   20: "10-12",
//   displayInfo: function() {
//     console.log(
//       `${school.name} was established in ${school.year} at ${
//         school.location
//       } with class ${school["20"]}`
//     );
//     // console.log(
//     //   `${this.name} was established in ${this.year} at ${this.location}`
//     // );
//   }
// };
// school.displayInfo();

// 2. Object Constructor
// "new" keyword
// const school = new Object();
// console.log(school);
// school = "DAV";
// school.location = "Delhi";
// school.year = 1971;
// school.displayInfo = function() {
//   console.log(this); //school object
//   console.log(
//     `${school.name} was established in ${school.year} at ${school.location}`
//   );
// };
// school.displayInfo();

// 3. Constructors
/*
Provides a template for creation of objects
*/
// function School(name, location, year) {
//   this.name = name;
//   this.location = location;
//   this.year = year;
// }

// const school1 = new School("DAV", "Delhi", 1971);
// console.log(school1);
// console.log(school1.name);
// const school2 = new School("DPS", "Bangalore", 1979);
// console.log(school2);
// console.log(school2.name);

//es6
// class Person {
//   constructor(name) {
//     // this.name = "Peter Parker";
//     this.name = name;
//   }
// }
// const person1 = new Person();
// const person1 = new Person("Bruce Wayne");
// console.log(person1.name);

// 4. Prototypes
/*
used to attach any properties or method to an object
Object.create(prototype_object)
*/
let footballers = {
  position: "Striker"
};

let footballer1 = Object.create(footballers);
footballer1.name = "Peter";
footballer1.age = 42;
footballer1.nationality = "USA";
// console.log(footballer1);
// console.log(footballer1.position); //Striker
// console.log(footballer1.hasOwnProperty("position")); //false
// console.log(footballer1.hasOwnProperty("name")); //true

// for(.. in)
// for (let key in footballer1) {
//   //   console.log(key); // all keys including prototype properties
//   console.log(footballer1[key]);
// }

// Object.keys()
// console.log(Object.keys(footballer1)); //['name','age','nationality'] // not having prototype properties

// Deleting properties

delete footballer1.nationality;
delete footballer1.position; // will not delete prototype properties
console.log(footballer1);
