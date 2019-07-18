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

//addEventListner()
/*
used to attach an event to document
syntax: document.addEventListener(eventName, callBackFunction, useCapture);
eventName: A srting, eventName (Required)
click
dblclick
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
// focusin and focusout bubbles but focus and blur does not
// var x = document.getElementById("myDiv");
// x.addEventListener("focus", myFocusFunDiv);
// x.addEventListener("blur", myBlurFunDiv);
// x.addEventListener("focusin", myFocusInFunDiv);
// x.addEventListener("focusout", myFocusOutFunDiv);

// var y = document.getElementById("myInput");
// y.addEventListener("focus", myFocusFunInput);
// y.addEventListener("blur", myBlurFunInput);
// y.addEventListener("focusin", myFocusInFunInput);
// y.addEventListener("focusout", myFocusOutFunInput);

// function myFocusFunDiv() {
//   console.log("focus Div");
// }
// function myBlurFunDiv() {
//   console.log("blur Div");
// }
// function myFocusInFunDiv() {
//   console.log("focus in Div");
// }
// function myFocusOutFunDiv() {
//   console.log("focus out Div");
// }
// function myFocusFunInput() {
//   console.log("focus Input");
// }
// function myBlurFunInput() {
//   console.log("blur Input");
// }
// function myFocusInFunInput() {
//   console.log("focus in Input");
// }
// function myFocusOutFunInput() {
//   console.log("focus out Input");
// }

//removeEventListener()
/*
used to remove an event that has been attached with addEventListener
from document
syntax: document.removeEventListener(eventName, callBackFunction, useCapture);
eventName: A srting, eventName (Required)
click
dblclick
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
//attach an event
// var x = document.getElementById("myBtn");
// x.addEventListener("dblclick", myFunction);

// function myFunction() {
//   console.log("double clicked");
// }

// //remove an event
// function removeEvent() {
//   x.removeEventListener("dblclick", myFunction);
// }

// var x = document.getElementById("myInput");
// x.addEventListener("focus", focusFun);
// x.addEventListener("blur", BlurFun);
// function focusFun() {
//   console.log("focus");
// }
// function BlurFun() {
//   console.log("blur");
// }

// function removeEvent() {
//   x.removeEventListener("focus", focusFun);
//   x.removeEventListener("blur", BlurFun);
// }

// getElementById()
/*
used to get the element by specific id
syntax: document.getElementById(id)
id :  string, required
returns : element of specific id
          null if there is no element
if there are more than one element with this id,
then the first element will be returned
*/
// document.body.style.backgroundColor = "green";
// var x = document.getElementById("myId");
// function getById() {
//   // console.log(x);
//   // console.log(x.tagName);
//   x.style.color = "white"; // changes the styles
//   x.style.backgroundColor = "red";
// }

// getElementsByClassName()
/*
used to get the element by class name
syntax: document.getElementsByClassName(className)
className :  string, required
returns : list of node element of class name
          null if there is no element
*/
// var x = document.getElementsByClassName("myClass");
// function getByClass() {
//   // console.log(x[0]);
//   // console.log(x[1].tagName);
//   // console.log(x[1].textContent); // returns text inside the element
//   // console.log(x[1].innerHTML); // returns html inside the element
//   // x[0].style.color = "white";
//   // x[0].style.backgroundColor = "red";
// }

//getElementsByTagName
/*
used to get the element by tag name
syntax: document.getElementsByTagName(tagName)
tagName :  string, required
returns : list of node element of tag name
          null if there is no element
*/
// var x = document.getElementsByTagName("p");
// var y = document.getElementsByTagName("span");
// function getByTag() {
//   console.log(x[1]);
//   console.log(y);
//   // x[2].style.color = "red";
//   y[0].style.color = "red";
//   // console.log(x[2]);
//   // x[2].style.color = "red";
// }

// getElementsByName
/*
used to get the element by name
syntax: document.getElementsByName(name)
name :  string, required
returns : list of node element of name
          null if there is no element
*/
// var x = document.getElementsByName("firstName");
// var y = document.getElementsByName("lastName");
// var z = document.getElementsByName("email");
// function getByName() {
//   // console.log(x);
//   console.log(x[0].value);
//   console.log(y[0].value);
//   console.log(z[0].value);
// }

//querySelector()
/*
returns the first matched elements of specific CSS selector
syntax:
document.querySelector(CSS selector)
CSS selector : String, Required
It selects the HTML element based on their id, classes, types, attributes, value of attributes
*/
// var ele = document.querySelector("p");
// var ele = document.querySelector("p.myClass");
// var ele = document.querySelector("p#myId");
// var ele = document.querySelector("p> span");
// var ele = document.querySelector("p.myClass> span");
// // console.log(ele);
// function getByQuery() {
//   ele.style.backgroundColor = "red";
// }

//querySelectorAll()
/*
returns all elements in the document that matches the specific CSS selector
return type : list of nodelist object
syntax: document.querySelectorAll(CSS selectors)
CSS selector : String, Required
It selects the HTML element based on their id, classes, types, attributes, value of attributes
*/
// var ele = document.querySelectorAll("p");
// var ele = document.querySelectorAll(".myClass");
// var ele = document.querySelectorAll(".myClass,h1, li");
// var ele = document.querySelectorAll("a");
// var ele = document.querySelectorAll("a[target]");
// console.log(ele);
// console.log(ele.length);
// function getByQueryAll() {
//   // ele[1].style.backgroundColor = "red";
//   for (let i = 0; i < ele.length; i++) {
//     // ele[i].style.backgroundColor = "red";
//     ele[i].style.fontWeight = "bold";
//     ele[i].style.border = "1px solid red";
//   }
// }

//innerHTML
/*
inserts or returns the HTML content of an element
syntax:
set : HTMLElementObject.innerHTML = text; //HTML content of an element
return: HTMLElementObject.innerHTML
*/
// var ele = document.getElementsByTagName("h1");
// // console.log(ele[0].innerHTML);
// // console.log(ele[1].innerHTML);
// function innerHTMLFun() {
//   // ele[1].innerHTML = "Heading 2";
//   ele[0].innerHTML = "<span class='red'>Heading 2</span>";
// }

//innerText
/*
get the inner text of an element
syntax:
set : HTMLElementObject.innerText = text;
returns: HTMLElementObject.innerText;
*/
// function innerTextFun(){
//   let ele = document.getElementsByTagName("h1");
//   // console.log(ele[0].innerText);
//   // ele[0].innerText = "Heading 2";
//   ele[0].innerText = "<span>Heading 2</span>";
// }
//difference
// function innerHTMLFun() {
//   alert(document.getElementById("innerTxt").innerHTML);
// }

// function innerTextFun() {
//   alert(document.getElementById("innerTxt").innerText);
// }

//createElement()
/*
used to create an element with the specified name
syntax: document.createElement(tagname:string);
*/
// let ele = document.createElement("BUTTON");

//createTextNode()
/*
creates a text node with specified name
syntax: document.createTextNode(text:string);
*/
// let text = document.createTextNode("click");

//appendChild()
/*
adds an element as the last child to the HTML element
syntax: ele.appendChild(childEle);
childEle : element added as the last child of ele
*/

// function createElementFun() {
//   // ele.appendChild(text);
//   // document.body.appendChild(ele);
//   let ele = document.createElement("P");
//   let text = document.createTextNode("Paragraph 1");
//   ele.appendChild(text);
//   document.getElementById("myDiv").appendChild(ele);
// }

//removeChild()
/*
removes a specified child element from the HTML element
syntax: ele.removeChild(childEle);
ele - the parent element of childEle
childEle - the child element of ele
*/

// function removeElementFun() {
//   let ele = document.getElementById("myDiv");
//   // console.log(ele.childNodes);
//   ele.removeChild(ele.childNodes[0]);
// }

//replaceChild()
/*
repleces a specified child element with another element from the HTML element
syntax: ele.replaceChild(newChildEle, oldChildEle);
*/
// function replaceElementFun() {
//   let ele = document.getElementById("myDiv");
//   // console.log(ele.childNodes);
//   let text = document.createTextNode("some paragraph");
//   ele.replaceChild(text, ele.childNodes[0]);
// }

//insertBefore()
/*
adds a specified child element before another child element
syntax: ele.insertBefore(newEle, refEle);
newEle :  New element to be inserted
refEle : A child element of ele before which newEle will be inserted
if null, newEle will be inserted as the last child of ele
*/
// function insertBeforeFun() {
//   let ele = document.getElementById("myList");
//   let newEle = document.createElement("LI");
//   let text = document.createTextNode("JavaScript");
//   newEle.appendChild(text);
//   console.log(ele.childNodes);
//   ele.insertBefore(newEle, ele.childNodes[3]);
// }

//setAttribute()
/*
It adds or updates the attribute/properties
syntax: ele.setAttribute(name, value);
ele - HTML element to which an attribute is added
name - name of the attribute
value - value of the attribute
*/
// function setAttributeFun() {
//   let ele = document.getElementsByTagName("H1");
//   // ele[0].setAttribute("class", "myClass");
//   ele[0].setAttribute("style", "color:red");
//   // let ele = document.getElementsByTagName("input");
//   // ele[0].setAttribute("type", "button");
// }

//getAttribute()
/*
used to get the value of specified attribute\
syntax: ele.getAttribute(name);
*/
// function getAttributeFun() {
//   let ele = document.getElementsByTagName("H1");
//   console.log(ele[0].getAttribute("class"));
// }

//removeAttribute()
/*
removes the specified attribute from an element
syntax: ele.removeAttribute(name);
*/
// function removeAttributeFun() {
//   let ele = document.getElementsByTagName("H1");
//   ele[0].removeAttribute("style");
// }
