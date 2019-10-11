//this
/*
It holds the reference to a single object
Its value changes depending on how a function gets called
*/

//'this' in a global context

// console.log(this); //Window
// console.log(this === window); //true

//'this' in object construction
/*
when we create a new instance of an object with the 'new' keyword,
'this' refers to the instance
*/

// function Human(age) {
// //   console.log(this);
//   this.age = age;
// }

// var person1 = new Human(25);
// var person2 = new Human(24);
// console.log(person1);
// console.log(person2);

//'this' in a simple function
/*
The value of 'this' in a simple function will be a window object
*/

// function abc() {
//   console.log(this); //Window
// }

// abc();

//'this' in an object
//'this' within any method refers to the object itself

// let obj = {
//   a: this,
//   sayHello() {
//     // console.log(this);
//     abc(); //Window
//   }
// };
// obj.sayHello(); //obj
// console.log(obj.a); //Window

// let obj = {
//   dosomeThingLater() {
//     console.log(this); //obj
//     this.sayHello();
//     setTimeout(function() {
//       console.log(this); //Window
//       this.sayHello(); //Error
//     }, 1000);
//   },
//   sayHello() {
//     console.log("Hello");
//   }
// };
// let obj = {
//   dosomeThingLater() {
//     // console.log(this); //obj
//     // this.sayHello();
//     var self = this;
//     setTimeout(function() {
//       //   console.log(this); //Window
//       //   console.log(self); //obj
//       self.sayHello();
//     }, 1000);
//   },
//   sayHello() {
//     console.log("Hello");
//   }
// };
// obj.dosomeThingLater();

//'this' in an arrow function
/*
It does not have its own 'this'
In global context, it will be set to the global object
*/

// const arrowFun = () => {
//   console.log(this); //Window
// };
// arrowFun();

// const someObj = {
//   num: this,
//   arrowFun: () => {
//     console.log(this); //Window only
//   }
// };
// console.log(someObj.num); //Window
// someObj.arrowFun();

// let obj = {
//   dosomeThingLater() {
//     // console.log(this); //obj
//     // this.sayHello();
//     setTimeout(() => {
//       // console.log(this); //obj
//       this.sayHello();
//     }, 1000);
//   },
//   sayHello() {
//     console.log("Hello");
//   }
// };
// obj.dosomeThingLater();

//'this' in event listeners
//'this' is se to the element that fired the event in an event listener method

let button = document.querySelector("button");

button.addEventListener("click", function() {
  console.log(this);
  console.log(this.tagName);
});

// button.addEventListener("click", () => {
//   console.log(this); //Window
// });

//In an inline event handler
/*
'this' is set to the DOM element on which the listener is placed
*/
// let option = document.querySelectorAll("option");
// option[1].addEventListener("click", function() {
//   console.log(this);
// });
// function selected(value) {
//   console.log(value);
// }
