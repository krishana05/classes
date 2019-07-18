//window
// var a = 10; // attaches to window object
// let aa = 10; // does not attach to window object
// console.log(window); // methods inside the window object

//alert
//used to diaplay some message on pop up

// alert("Hello");
// alert(2 + 3);
// alert("Hello");

//confirm
/*
used to take user acceptance or want to verify something
return value : true, if ok
                false, if cancel
*/
// let response = confirm("Are you sure, you want to delete this ?");
// console.log(response);

//prompt
/*
used to take input from user
syntax: prompt(message, defaultValue);
defaultValue : optional
return value : entered value for ok and null for cancel
*/

// let response = prompt("What is your name ? ");
// let response = prompt("What is your name ? ", "Enter you name here");
// let response = prompt(
//   "What is your state name ? ",
//   "Enter you state name here"
// );
// console.log(response);
// let state = response.toLowerCase();
// if (state == "karnataka") {
//   alert("Your capital is Bangalore");
// } else if (state == "tamilnadu") {
//   alert("Your capital is Chennai");
// } else if (state == "maharashtra") {
//   alert("Your capital is Mumbai");
// } else if (state == "delhi") {
//   alert("Your capital is New Delhi");
// } else {
//   alert("Wrong Input");
// }

//setInterval
/*
used to call a function or evaluate an expression at specified interval
syntax: setInterval(callbackFunction, intervalTime);
intervalTime is in milliseconds
*/

// setInterval(function() {
//   //   console.log("Infinite");
//   let d = new Date();
//   //   console.log(d);
//   let locale = d.toLocaleTimeString();
//   //   console.log(locale);
//   //   document.write(locale);
// }, 1000);

//clearInterval
// clears the specified setInterval

// let myInterval = setInterval(function() {
//   let d = new Date();
//   //   console.log(d);
//   let locale = d.toLocaleTimeString();
//   console.log(locale);
// }, 1000);

// function stopMe() {
//   clearInterval(myInterval);
// }

//setTimeout
/*
used to call a function or evaluate an expression after some specified time
syntax: setTimeout(callbackFunctionb, intervalTime);
intervalTime is in milliseconds
*/
// setTimeout(() => console.log("called after 2 secs"), 2000);
// setTimeout(myfun, 2000);
// function myfun() {
//   console.log("called after 2 secs");
// }

//clearTimeout
// let response = setTimeout(() => console.log("logged out"), 3000);
// function stopMe() {
//   clearTimeout(response);
//   setTimeout(() => console.log("logged out"), 3000);
// }

//open
/*
opens a URL in new tab or window
synatx: window.open(URL, name, configuration);
URL : mandatory
name: _blank, _self, _parent
configuration : 
*/
// var myWindow;
// function openMe() {
//   //   window.open("https://www.google.com"); // bydefault _blank
//   //   window.open("https://www.google.com", ""); // bydefault _blank
//   //   window.open("https://www.google.com", "_self"); // opens in same tab
//   //   window.open("https://www.google.com", "", "width=400 height=400");
//   myWindow = window.open("", "", "width=400 height=400");
//   myWindow.document.write("I am 400px of height and width");
// }

//close
/*
used to close the opened window
syntax: windowName.close();
*/
// function closeMe() {
//   myWindow.close();
// }

//scrollTo
/*
used to scroll the document to some specified number position
syntax: window.scrollTo(xPos, yPos);
xPos: required, Number - how many postion to scroll on x-axis
yPos: required, Number - how many postion to scroll on y-axis
*/
// function scrollToFun() {
//   window.scrollTo(50, 50);
// }
//scrollBy
/*
used to scroll the document by some specified number position
it adds the xPos and yPos to the current position
syntax: window.scrollBy(xPos, yPos);
xPos: required, Number - how many postion to scroll on x-axis
yPos: required, Number - how many postion to scroll on y-axis
*/
// function scrollByFun() {
//   window.scrollBy(20, 20);
// }

//moveTo
/*
used to move the window from top left corner
*/
// function moveToFun() {
//   myWindow.moveTo(100, 100);
//   myWindow.focus(); //focus on window
// }
//moveBy
// function moveByFun() {
//   myWindow.moveBy(20, 20);
//   //   myWindow.focus(); //focus on window
//   myWindow.blur(); //focus goes away from window
// }
//resizeTo
/*
used to resize the window
*/
// function resizeToFun() {
//   myWindow.resizeTo(100, 100);
//   myWindow.focus(); //focus on window
// }
//resizeBy
// function resizeByFun() {
//   myWindow.resizeBy(20, 20);
//   myWindow.focus(); //focus on window
// }

// innerHeight & innerWidth
// used to calculate the hight and width of the window

// function calculateHW() {
//   let h = window.innerHeight;
//   let w = window.innerWidth;
//   console.log(`height: ${h}, width: ${w}`);
// }
