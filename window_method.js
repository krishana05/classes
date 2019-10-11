// console.log(window);
//alert
/* 
used to display some message on pop up
syntax: alert(someMessage) 
*/
// alert("Hello JS");
// alert(2 + 3);
// window.alert("Hello JS");

//confirm
/*
used when you want some user acceptance or you want to verify something
return value: true, for ok and false for cancel
*/
// var response = confirm("Are you sure, you want to delete this ?");
// document.write(response);
// if (response == true) {
//   alert("deleted");
// } else {
//   alert("not deleted");
// }

//prompt
/*
used to take user input
syntax: prompt(message, defaultValue)
defaultValue: optional
*/
// prompt("Enter your name");
// var response = prompt("What is your name ?","Enter your name here..");
// document.write(response);
//excercise
// var response = prompt("What is your state ?", "Enter your state name here..");
// document.write(response);
// if (response.toLowerCase() == "karnataka") {
//   alert("your capital is Bangalore");
// } else if (response.toLowerCase() == "maharashtra") {
//   alert("your capital is Mumbai");
// } else {
//   alert("Invalid input !!");
// }

//Date object
var date = new Date();
//get current time
// document.write(date + " ");
//get year
// document.write(date.getFullYear() + " ");
//get month (0-11)
// document.write(date.getMonth() + 1 + " ");
//get day (1-31)
// document.write(date.getDate() + " ");
//get hours (0-23)
// document.write(date.getHours() + " ");
//get minutes (0-59)
// document.write(date.getMinutes() + " ");
//get seconds (0-59)
// document.write(date.getSeconds() + " ");
//get millisecond (0-999)
// document.write(date.getMilliseconds() + " ");
//get weekday (0-6)
// document.write(date.getDay() + " ");
//get local time
// document.write(date.toLocaleTimeString() + " ");
//get local date
// document.write(date.toLocaleDateString());

//callBackFunction

//setInterval
/*
used to call a function or evaluate an expression at specified intervals
syntax: setInterval(callbackfunction, intervalTime)
intervalTime is in milliseconds
*/
var clear;
// function startTimer() {
//   clear = setInterval(myFunction, 1000);
// }
// function myFunction() {
//   //   document.write("intervals");
//   var date = new Date();
//   var localTime = date.toLocaleTimeString();
//   console.log(localTime);
// }

// function clickMe(a, b) {
//   //   alert("I m clicked");
//   console.log("The sum is ", a + b);
// }

//clearInterval
// function stopMe() {
//   clearInterval(clear);
// }
//global or local

//setTimeout
/*
used to call a function or evaluate an expression after a specified time
syntax: setTimeout(callbackfunction, timeout)
timeout is in milliseconds
*/
// setTimeout(function() {
//   document.write("Called after 2 secs");
// }, 2000);

// function startTimer() {
//   clear = setTimeout(function() {
//     console.log("Called after 2 secs");
//   }, 2000);
// }

//clearTimeout
// function stopMe() {
//   clearTimeout(clear);
// }

//open
/*
opens a URL in new tab or window
syntax: window.open(URL,name,configuartion)
URL :mandatory
name: _blank, _self
*/
var myWindow;
// function openMe() {
//   // window.open("https://www.google.com");
//   // window.open("https://www.google.com", "_self");
//   // window.open("https://www.google.com", "", "width=200px height=200px");
//   myWindow = window.open("", "", "width=200px height=200px");
//   myWindow.document.write("I have 200px of height and width");
// }

//close
/*
used to close the opened window
syntax: windowName.close();
*/

function closeMe() {
  myWindow.close();
}

//excercise
function startTimer(){
  setTimeout(function() {
    myWindow = window.open("", "", "width=200px height=200px");
    myWindow.document.write("I have 200px of height and width");
    setTimeout(closeMe, 4000);
  }, 2000);
}
