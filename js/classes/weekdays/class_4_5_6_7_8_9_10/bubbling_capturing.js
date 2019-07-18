//bubbling
/*
event handler will first run on element, then on its parent
and then all the way up on other ancestors.
*/
// event.target - who initiated the event
// var x = document.getElementById("myForm");
// x.addEventListener("click", function(event) {
//   //console.log(event);
//   console.log(event.target.tagName);
// });
// this - is "current" element, who is currently running the handler
// var x = document.getElementById("myForm");
// x.addEventListener("click", function(event) {
//   //console.log(event);
//   console.log("target element :", event.target.tagName);
//   console.log("this:", this.tagName);
// });

//stopPropagation()
/*
method used to stop the bubbling event
*/
// function myFunction() {
//   alert("Button Clicked");
//   event.stopPropagation();
// }

// stopImmediatePropagation()
/*
prevents other listerners of the same event from being called
*/
//difference
/*
stopPropagation()
prevents events to move upwards
stopImmediatePropagation()
no other hanlder will run on current element
*/
// function myFunction() {
//   alert("first event handler");
//   event.stopImmediatePropagation();
// }
// function otherFunction() {
//   alert("second event handler");
// }
// var x = document.getElementById("myBtn");
// x.addEventListener("click", myFunction);
// x.addEventListener("click", otherFunction);

//capturing
/*
event will start from the document 
and goes down to target element
*/
// for (let elem of document.querySelectorAll("*")) {
//   elem.addEventListener(
//     "click",
//     function(e) {
//       alert(`Capturing: ${elem.tagName}`);
//     },
//     true
//   );
// }

// for (let elem of document.querySelectorAll("*")) {
//   // Caputure
//   elem.addEventListener(
//     "click",
//     function(e) {
//       alert(`Capturing: ${elem.tagName}`);
//     },
//     true
//   );
//   //Bubble
//   elem.addEventListener("click", function(e) {
//     alert(`Bubbling: ${elem.tagName}`);
//   });
// }
