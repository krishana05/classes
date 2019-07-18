//Closure
/*
A function having access to the parent scope, even after the parent function is closed.
Innermost function will have access to the variables in outer function
Variables can me made private with closures.
*/
//accessing a local variable
// function myFunction() {
//   var a = 7;
//   return a * a;
// }
//Accessing a global variable
// var a = 7;
// function myFunction() {
//   return a * a;
// }
// console.log(myFunction());
//
//Step 1
// function counter() {
//   var count = 0;
//   count++;
//   console.log(count);
//   return count;
// }
//Step2
// var count = 0;
// function counter() {
//   var count = 0;
//   count++;
//   return count;
// }
//Step3
// var count = 0;
// function counter() {
//   count++;
//   return count;
// }
//Nested function
// function counter() {
//   var count = 0;
//   function plus() {
//     count++;
//   }
//   plus();
//   console.log(count);
//   return count;
// }
//IIFE (Immediate Invoking Function Expression) function
// (function() {
//   console.log(10);
// })();
// var add = (function() {
//   var count = 0;
//   return function plus() {
//     count++;
//     return count;
//   };
// })();

//Other Example
//example 1
// function someFunc() {
//   var a = 1;
//   function inner() {
//     return a++;
//   }
//   return inner;
// }
// var add = someFunc();
// console.log(add);
// console.dir(add); // get the closure variable

//example 2

// function outerFun(outerValue) {
//   function innerFun(innerValue) {
//     return outerValue + innerValue;
//   }
//   return innerFun;
// }
// var add = outerFun(5);
// function increaseCount() {
//   //   counter();
//   console.log(add(4));
//   console.log(add(7));
//   //   console.log(count);
// }
