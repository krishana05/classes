// (string, number, null, undefined, boolean) - primitive data type and object
// Object
/*
Object is a non-primitive data type
It may contain the combination of these primitive data type
It is also reference data type 
(i.e. variables are assigned with the reference of the value)
Object is unordered collection of related data of primitive or reference types
with "key" and "value" pair.
*/

// Creating a Object
/*
Can be created using "{}" with having key and value pair inside this 
Key - can be a string ("property name")
*/
// let school = {
//   "name": "Vivekanand School",
//   "location": "Delhi",
//   "established": "1971"
// };

// console.log(school);
// console.log(typeof school);

// Object can also contain a function

// let school = {
//   name: "Vivekanand School",
//   location: "Delhi",
//   established: "1971",
//   20: 1000,
//   "other location": "Bangalore",
//   displayInfo: function() {
//     console.log(
//       `${school.name} was established in ${school.location} at ${
//         school.established
//       }`
//     );
//   }
// };

// How to access the properties of Object
/*
1. Using (.) - dot
2. Using [] - bracket
*/
// dot(.)
// console.log(school.name);
// console.log(school.location);
// console.log(school.established);
// calling a object method
// school.displayInfo();

// []
// console.log(school[20]);
// console.log(school["other location"]);

// Creating Objects
/*
 1. Using the object literal syntax
 var obj = {
     key1 : value1,
     key2: value2
     .
     .  
 }
 */
/*
 2. Using object constructor
 - "new" keyword
 */
// const school = new Object();
// // adding a property
// school.name = "Vivekanand School";
// school.location = "Delhi";
// school.established = 1971;
// // adding a method
// school.displayInfo = function() {
//   console.log(
//     `${school.name} was established in ${school.location} at ${
//       school.established
//     }`
//   );
// };

// const school = new Object();
// // adding a property
// school.name = "DAV School";
// school.location = "Delhi";
// school.established = 1978;
// // adding a method
// school.displayInfo = function() {
//   console.log(
//     `${school.name} was established in ${school.location} at ${
//       school.established
//     }`
//   );
// };

// console.log(school);
// console.log(school.name);
// console.log(school.location);
// console.log(school.established);
// school.displayInfo();
// console.log(typeof school);

/*
 3. Using Constructors
Provides a template for creation of object
 */
// function School(name, location, established) {
//   this.name = name;
//   this.location = location;
//   this.established = established;
//   //   console.log("Called");
// }

// let school1 = new School();
// let school1 = new School("Vivekanand School", "Delhi", 1971);
// console.log(school1);
// let school2 = new School("DAV School", "Delhi", 1978);
// console.log(school2);
// let school3 = new School("ST Paul", "Bangalore", 1965);
// console.log(school3);

// Classes - introduced after ES6

// class School {
//   constructor() {
//     // console.log("executed first");
//     this.name = "Vivekanand School";
//   }
// }

// let school1 = new School();
// class School {
//   constructor(name, location, established) {
//     // console.log("executed first");
//     this.name = name;
//     this.location = location;
//     this.established = established;
//   }
// }

// class School {
//   constructor(name, location, established) {
//     // console.log("executed first");
//     this.name = name;
//     this.location = location;
//     this.established = established;
//     this.displayInfo = function() {
//       console.log(
//         `${this.name} was established in ${this.location} at ${
//           this.established
//         }`
//       );
//     };
//   }
// }

// let school1 = new School("Vivekanand School", "Delhi", 1971);
// console.log(school1);
// console.log(school1.name);
// console.log(school1.location);
// console.log(school1.established);
// school1.displayInfo();

/*
 4. Using Prototypes
Every javascript function will have their own prototype method
syntax: Object.create(prototype_object, propertiesObject)
        propertiesObject is optional
 */
// let obj = new Object();
// obj.name = "some name";
// console.log(obj.hasOwnProperty("name"));

// let footballProto = {
//   position: "Striker"
// };

// adding a method to prototype
// let footballProto = {
//   position: "Striker",
//   canStrike: function() {
//     console.log("Striked !!");
//   }
// };

// let footballProto = {
//   position: "Striker"
// };

// let footballer1 = Object.create(footballProto);
// footballer1.canStrike = function() {
//   console.log("Striked !!");
// };
// console.log(footballer1);
// console.log(footballer1.position);
// footballer1.canStrike();

// Iterating an object
/*
(for...in) loop
*/
// let PersonProto = {
//   gender: "male"
// };

// let person1 = Object.create(PersonProto);
// person1.name = "Adam";
// person1.age = 45;
// person1.nationality = "Australian";

// console.log(person1);

// for (let key in person1) {
//   //   console.log(key); // prints keys/properties inclucing prototype
//   console.log(person1[key]); // prints the value
// }
// console.log(Object.keys(person1)); // get the keys except prototype

// Deleting Properties
/*
Properties of any object can be deleted using "delete" keyword
modifies the original object
*/

// let obj = {
//   firstProp: "Name",
//   secondProp: "Address"
// };
// let objProto = {
//   firstProp: "Name",
//   secondProp: "Address"
// };
// console.log(obj.firstProp);
// delete obj.firstProp;
// console.log(obj);
// console.log(obj.firstProp);
// let obj1 = Object.create(objProto);
// console.log(obj1);
// console.log(obj1.firstProp);
// console.log(obj1.secondProp);
/*
delete will not delete any inherited properties
*/
// delete obj1.firstProp;
// console.log(obj1);
// console.log(obj1.firstProp);
