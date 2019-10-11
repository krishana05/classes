//let & const

//hoisting

//
// var a = 10;
// var a = 20;
// console.log(a);
// let b = 10;
// let b = 20;
// console.log(b);

//es5
// function scopeTest() {
//   var x = 10;
//   {
//     var x = 100;
//   }
//   {
//     var x = "This is a string";
//   }
//   return x;
// }
//es6
// function scopeTest() {
//   let x = 10;
//   {
//     let x = 100;
//     console.log(x);
//   }
//   {
//     let x = "This is a string";
//     console.log(x);
//   }
//   return x;
// }

// console.log(scopeTest());

//Template Literals
// const name = "Peter Parker";
// console.log("Hello " + name);//es5
// console.log(`Hello ${name}`);//es6

//Multi-line string
// var a = "sdnkasdnkasndknsdkansdknask ksknaknask"
// + "dabdabsdjabsjasj"; //es5
// var b = `abdajdbjabdkadabsdkjaskaska
// sdsajdnjkasda
// dakdjkadskasdk`; //es6

// Arrow function

//es5
// const myFunc5 = function(a, b) {
//   // console.log(`es5 function, Sum : ${a + b}`);
//   return a + b;
// };
//es6
// const myFunc6 = (a, b) => a + b;

// console.log(myFunc5(3, 4));
// console.log(myFunc6(5, 4));

//Default Parameter
//es5
// function multiply(x, y) {
//   var a = x || 1;
//   var b = y || 1;
//   return a * b;
// }
//es6
// function multiply(x = 1, y = 1) {
//   return x * y;
// }
// console.log(multiply(null, 22));//0

//Destructuring
// var randomData = { a: 12, b: true, c: "blue" };
// var randomData = [12, true, "blue"];
//es5
// var a = randomData.a;
// var b = randomData.b;
// var c = randomData.c;
// var a = randomData[0];
// console.log(a);

//es6
// var { a, c } = randomData;
// var { a, b } = randomData;
// var { a, d } = randomData;
// var [a, , c] = randomData;
// console.log(a, c);
