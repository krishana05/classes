//activeElement
/*
returns active elements of document
syntax: document.activeElement();
*/
// tagName
// className
// Id
// function myfunction() {
//   //var x = document.activeElement.tagName;
//   var x = document.activeElement.className;
//   console.log(x);
// }

//addEventListner
/*
used to attach an event to document
syntax: document.addEventListener(eventName, callBackFunction, useCapture);
eventName: A srting, eventName (Required)
click
mouseover
mouseout
focus
blur
focusout
focusin
callBackFunction: Required. tells the function what to do when an event occurs
useCapture : false - Bubbling
  true - Capturing
*/
//click event

// document.addEventListener("click", myFunction);
// document.addEventListener("click", myFunction1);
// document.addEventListener("click", myFunction2);
// document.addEventListener("click", myFunction3);
// document.addEventListener("click", function() {
//   alert("I am Clicked");
// });

// function myFunction() {
//   alert("I am Clicked");
// }
// function myFunction1() {
//   console.log("event 1");
// }
// function myFunction2() {
//   console.log("event 2");
// }
// function myFunction3() {
//   console.log("event 3");
// }

//mouseover
//mouseout
// document.addEventListener("mouseover", mouseInFun);
// document.addEventListener("mouseout", mouseOutFun);

// function mouseInFun() {
//   console.log("mouseIn");
// }
// function mouseOutFun() {
//   console.log("mouseOut");
// }
//getElementById
//getElementsByClassName
//getElementsByTagName
//focus && blur
// var x = document.getElementById("myInput");
// x.addEventListener("focus", focusFun);
// x.addEventListener("blur", BlurFun);
// function focusFun() {
//   console.log("focus");
// }
// function BlurFun() {
//   console.log("blur");
// }

// focusin and focusout
