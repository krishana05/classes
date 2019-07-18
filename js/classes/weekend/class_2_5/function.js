// function
/*
set of statements which takes some input, do some specific task 
and produced the output
syntax:
function functionName(parameter1, parameter2, ....){
    // function body
}
*/
//reduces the duplication of code
//increases the reusablility

// calling a function
// functionName(parameter1, parameter2, ....);

// Function definition
// function welcomeMsg(name) {
//   console.log(`Hello ${name}, Welocme to JS`);
// };
// welcomeMsg("John");

// function expression && anonymous function - no name
// var myfunc = function(){
//     console.log('function expression with anonymous function');
// };
// myfunc();

// Self- invoking function or IIFE - immediate invoking function expression
// (function() {
//   console.log("self invoking function");
// })();

// var a = 10;
// (function() {
//   console.log(a);
// })(a);

// returning a value

// function calculateAdd(num1, num2) {
//   return num1 + num2;
//   //   console.log("after return");
// }
// var result = calculateAdd(10, 15);
// console.log(result);

// variable scopes
/*
2 types
global - scope outside the function and attched to window
local - inside the function being executed
*/
let globalVariable = " This is a global variable";

// function fun() {
//   let localVariable = "This is a local variable";
//   console.log(globalVariable);
//   console.log(localVariable);
// }
// function fun() {
//   let localVariable = "This is a local variable";
// }
// fun();
// console.log(globalVariable);
// console.log(localVariable);
// console.log(window);
// function fun() {
//   localVariable = "This is a local variable"; // by default var, will become a global variable
// }
// fun();
// console.log(globalVariable);
// console.log(localVariable);

// function fun() {
//     let globalVariable = "This is a local variable";
// }
// fun();
// console.log(globalVariable);

// function fun() {
//   let globalVariable = "This is a local variable";
//   console.log(globalVariable);
// }
// fun();

// function fun() {
//   let globalVariable = "This is a local variable";
//   console.log(window.globalVariable);
// }
// fun();

// function fun() {
//   function fun2() {
//     i = 10;
//   }
//   fun2();
//   console.log(i); // 10
// }
// fun();

// function fun() {
//     function fun2() {
//       let i = 10;
//     }
//     fun2();
//     console.log(i);// i is not defined
//   }
//   fun();

// after ES6, 'if' block is also counted as a block scope in case of let
// function fun() {
//   if (true) {
//     let i = 10;
//   }
//   console.log(i); // i is not defined
// }
// fun();

// function fun() {
//   function fun2() {
//     var i = 10;
//   }
//   fun2();
//   console.log(i);
// }
// fun();
