//var a =10;
//console.log(window); // methods inside window object

// alert
/* used to display some message on pop up */

// alert("Hello");
// window.alert("Hello");

// confirm
/* used when you want some user acceptance or you want to verify something */
// return value : true, for ok and false for cancel

// var response = confirm("are you sure, you want to delete this ?");
// console.log(response);

//prompt
/* used to take input from user
syntax: prompt(message, defaultValue)
defaultValue : optional
*/
// return value : entered value for ok and null for cancel

// var response = prompt("What is your name ? ");
// var response = prompt("What is your name ?","Enter your name here");
// console.log(response);

// var response = prompt(
//   "Which state you belongs to ?",
//   "Enter your state name here"
// );
// console.log(response);
// if (response.toLowerCase() === "karnataka") {
//   console.log("Your capital is Bangalore");
// } else if (response.toLowerCase() === "tamilnadu") {
//   console.log("Your capital is Chennai");
// } else if (response.toLowerCase() === "maharashtra") {
//   console.log("Your capital is Mumbai");
// } else {
//   console.log(response);
//   alert("Wrong Input");
// }

//setInterval
/*
used to call a function or evaluate an expression at specified intervals
syntax: setInterval(callbackFunction,intervalTime);
intervalTime is in milliseconds
*/
// var stopInterval = setInterval(function() {
//   //console.log("Infinite");
//   var d = new Date();
//   var locale = d.toLocaleTimeString();
//   console.log(locale);
// }, 1000);

//clearInterval
// function stopMe() {
//   clearInterval(stopInterval);
// }

//setTimeout
/*
used to call a functoin or evaluate an expression after a specified time
syntax: setTimeout(callbackFunction,intervalTime);
intervalTime is in milliseconds
*/
// var stopTimeout = setTimeout(function(){
//     console.log("called after 2 secs");
// },2000);

//clearTimeout
// function stopMe(){
//     clearTimeout(stopTimeout);
// }
// function stopMe(){
//     clearTimeout(stopTimeout);
//     setTimeout(function(){
//         console.log("called after reset");
//     },2000);
// }

//open
/*
opens a URL in new tab or window
syntax: window.open(URL,name,configuration)
URL : mandatory
name : _blank , _parent , _self
configuration : 
*/
// window.open('https://www.google.com');
// window.open('https://www.google.com','_blank');
// var myWindow;
// function openMe() {
//   //window.open("https://www.google.com", "_blank");
//   myWindow = window.open("", "", "width=200 height=200");
//   window.open("https://www.google.com", "", "width=200 height=200");
//   myWindow.document.write("i have 200px of height and width");
// }
//close
/*
used to close the opened window
syntax: windowName.close();
*/
// function closeMe() {
//   myWindow.close();
// }
// scrollBy
/*
used to scroll the document by some specificed number position
syntax: window.scrollBy(xPos, yPos);
xPos : required, Number - how many position to scroll by on x-axis
yPos : required, Number - how many position to scroll by on y-axis
*/
// function scrollBy1() {
//   window.scrollBy(100, 100);
// }
//scrollTo
/*
used to scroll the document by some specificed number position
syntax: window.scrollTo(xPos, yPos);
xPos : required, Number - how many position to scroll by on x-axis
yPos : required, Number - how many position to scroll by on y-axis
*/
// function scrollTo1() {
//   window.scrollTo(100, 100);
// }

// innerHeight & innerWidth
//calculates height and width of the window
// function calculate() {
//   var w = window.innerWidth;
//   var h = window.innerHeight;
//   console.log(w, h);
// }
// var myWindow;
// function opneNewWindow() {
//   myWindow = window.open("", "", "width=200,height=200");
// }
// // moveTo
// function moveTo1() {
//   myWindow.moveTo(100, 100);
// }
// // moveBy
// function moveBy1() {
//   myWindow.moveBy(100, 100);
// }

//resizeTo
/*
used to resize window size
*/

//resizeBy
// var myWindow;
// function openNewWindow() {
//   myWindow = window.open("", "", "width=200,height=200");
// }
// function sizeTo1() {
//   myWindow.resizeTo(100, 100);
//   myWindow.focus();
// }
// function sizeBy1() {
//   myWindow.resizeBy(100, 100);
//   myWindow.focus();
// }
