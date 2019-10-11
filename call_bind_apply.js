//call, bind, apply
//All attach 'this' into any function or object

//call
//It attaches 'this' into function and executes the function immdediately

//example 1
// const person = {
//   name: "Peter Parker",
//   hello: function(thing) {
//     // console.log(this); //person
//     console.log(this); //object with call method
//     console.log(`${this.name} says hello ${thing}`);
//   }
// };
// person.hello("world"); //Peter Parker says hello world
// person.hello.call({ name: "Bruce Wayne" }, "world"); //Bruce Wayne says hello world

//example 2
// const person1 = {
//   firstName: "Peter",
//   lastName: "Parker"
// };
// const person2 = {
//   firstName: "Bruce",
//   lastName: "Wayne"
// };

// function say(greeting) {
//   console.log(this);
//   console.log(`${greeting} ${this.firstName} ${this.lastName}`);
// }

// say.call(person1, "Hello"); //Hello Peter Parker
// say.call(person2, "Hey"); //Hey Bruce Wayne

//bind
//It attaches 'this' into function and it needs to be invoked seperately
// example 1
// const person = {
//   name: "Peter Parker",
//   hello: function(thing) {
//     // console.log(this); //person
//     console.log(this); //object with bind method
//     console.log(`${this.name} says hello ${thing}`);
//   }
// };

// const helloFun = person.hello.bind({ name: "Bruce Wayne" }, "world");
// const helloFun = person.hello.bind({ name: "Bruce Wayne" });
// const helloFun = person.hello.bind({ name: "Bruce Wayne" }, "Hi"); //will take 'Hi' only
// helloFun("world");
// helloFun();

//example 2
// const person1 = {
//   firstName: "Peter",
//   lastName: "Parker"
// };
// const person2 = {
//   firstName: "Bruce",
//   lastName: "Wayne"
// };

// function say(greeting) {
//   console.log(this);
//   console.log(`${greeting} ${this.firstName} ${this.lastName}`);
// }

// const sayParker = say.bind(person1, "Hello");
// const sayWayne = say.bind(person2, "Hey");
// const sayParker = say.bind(person1);
// const sayWayne = say.bind(person2);
// sayParker(); //Hello Peter Parker
// sayWayne(); //Hey Bruce Wayne
// sayParker("Hi"); //Hi Peter Parker
// sayWayne("Hi"); //Hi Bruce Wayne

//apply
//It is similar to call
//except it takes an array-like object instead of listing out the arguments one at a time

// example 1
// const obj = {
//   name: "Bruce Wayne"
// };
// function personContainer() {
//   console.log(arguments[0]);
//   const person = {
//     name: "Peter Parker",
//     hello: function() {
//       console.log(`${this.name} says hello ${arguments[0]}`);
//       console.log(`${this.name} says hello ${arguments[1]}`);
//     }
//   };
//   person.hello.apply(person, arguments);
//   person.hello.apply(obj, arguments);
// }
// personContainer("Hello");
// personContainer("world", "mars");

//example 2
// const person1 = {
//   firstName: "Peter",
//   lastName: "Parker"
// };
// const person2 = {
//   firstName: "Bruce",
//   lastName: "Wayne"
// };

// function say(greeting) {
//   //   console.log(this);
//   //   console.log(greeting);
//   console.log(`${greeting} ${this.firstName} ${this.lastName}`);
// }

// say.apply(person1, ["Hello"]);
// say.apply(person2, ["Hello"]);
