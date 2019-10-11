// console.log(document);
//getElementById()
/*
used to get the element by specific id
syntax: document.getElementById(id)
id: string, required
returns: element of specific id
        null, if there is no element
if there are more than one element with this id,
then the first element will be returned
*/
// var ele = document.getElementById("myBtn");
// var ele = document.getElementById("myList");
// console.log(ele);
// console.log(ele.tagName);
// ele.style.color = "red";
// ele.style.backgroundColor = "green";

//getElementsByClassName()
/*
used to get the element by class name
syntax: document.getElementsByClassName(className)
className: string, required
returns: list of element of class name
        null, if there is no element
*/
// var ele = document.getElementsByClassName("mylist");
// console.log(ele);
// ele[0].style.color = "red";
// console.log(ele[0].textContent); //returns text inside an element
// console.log(ele[0].innerHTML); //returns html inside an element

//getElementsByTagName()
/*
used to get the element by tag name
syntax: document.getElementsByTagName(tagName)
tagName: string, required
returns: list of element of tag name
        null, if there is no element
*/
// var x = document.getElementsByTagName("li");
// var y = document.getElementsByTagName("span");
// console.log(x);
// console.log(y);
// x[1].style.border = "1px solid red";
// y[0].style.backgroundColor = "orange";

//getElementsByName()
/*
used to get the element by name attribute
syntax: document.getElementsByName(name)
name: string, required
returns: list of element of specific name attribute
        null, if there is no element
*/
// const x = document.getElementsByName("firstName");
// x[0].style.border = "1px solid blue";
// x[1].style.border = "1px solid cyan";

// function getByName() {
//   //   console.log(x);
//   console.log(x[0].value);
//   console.log(x[1].value);
// }

//querySelector()
/*
returns the first matched elements of specific CSS selector
syntax: document.querySelector(CSS Selector)
CSS Selector : String, Required
It selects the HTML element based on their id, classes, types, attributes, value of attributes
*/
// const ele = document.querySelector("p");
// const ele = document.querySelector("#para2");
// const ele = document.querySelector(".para3");
// const ele = document.querySelector("p span");
// console.log(ele);
// function getByQuery() {
//   ele.style.color = "red";
// }

//querySelectorAll()
/*
returns all matched elements of specific CSS selector
return type : list of matched elements
syntax: document.querySelectorAll(CSS Selector)
CSS Selector : String, Required
It selects the HTML element based on their id, classes, types, attributes, value of attributes
*/
// const ele = document.querySelectorAll("p");
// const ele = document.querySelectorAll("p span");
// const ele = document.querySelectorAll("p,h1,h2");
// const ele = document.querySelectorAll("a[target]");
// const ele = document.querySelectorAll(".mySpan");
// console.log(ele);
// function getByQuery() {
//   for (var i = 0; i < ele.length; i++) {
//     ele[i].style.color = "red";
//     ele[i].style.fontWeight = "bold";
//     ele[i].style.border = "1px solid blue";
//   }
// }

//innerHTML
/*
inserts or returns the HTML content of an element
syntax:
set : HTMLElement.innerHTML =text;
return : HTMLElement.innerHTML;
*/
// var ele = document.getElementsByTagName("h1");
// function innerHtmlFun() {
//   //   console.log(ele[0].innerHTML);
//   //   ele[0].innerHTML = "This is another header";
//   ele[0].innerHTML = "<span>This is another header</span>";
// }

//innerText
/*
inserts or returns the text content of an element
syntax:
set : HTMLElement.innerText =text;
return : HTMLElement.innerText;
*/
// function innerTextFun() {
//   //   console.log(ele[0].innerText);
//   //   ele[0].innerText = "This is another header";
//   ele[1].innerText = "<span>This is another header</span>";
// }

//createElement
/*
used to create an element with the specified name
syntax: document.createElement(tagName:string)
*/
// var button = document.createElement("button");

//createTextNode
/*
creates a text node with sepcified name
synatx: document.createTextNode(text:string)
*/

// var text = document.createTextNode("click");

//appendChild
/*
adds an element as the last child to the HTML element
syntax: parentEle.appendChild(childEle)
*/
// button.appendChild(text);

// function createElementFun() {
//   //   document.body.appendChild(button);
//   //   const para = document.createElement("p");
//   //   const text = document.createTextNode("This is a paragraph");
//   //   para.appendChild(text);
//   //   document.body.appendChild(para);
//   //   const div = document.getElementById("myDiv");
//   //   document.getElementById("myDiv").appendChild(para);

//   //excercise
//   const ul = document.createElement("ul");
//   const li1 = document.createElement("li");
//   const li2 = document.createElement("li");
//   const list1 = document.createTextNode("This is list1");
//   const list2 = document.createTextNode("This is list2");
//   li1.appendChild(list1);
//   li2.appendChild(list2);
//   ul.appendChild(li1);
//   ul.appendChild(li2);
//   document.body.appendChild(ul);
// }

//removeChild
/*
removes a specified child element from the HTML element
syntax: parentEle.removeChild(childEle)
*/
// function removeElementFun() {
//   const ul = document.querySelector("ul");
//   console.log(ul.childNodes);
//   ul.removeChild(ul.childNodes[3]);
// }

//replaceChild
/*
replaces a specified child element with another element from the HTML element
syntax: element.replaceChild(newChildEle, oldChildEle)
*/
// function replaceElementFun() {
//   const ul = document.querySelector("ul");
//   console.log(ul.childNodes);
//   const li = document.createElement("li");
//   const text = document.createTextNode("replaced list");
//   li.appendChild(text);
//   ul.replaceChild(li, ul.childNodes[3]);
// }

//setAttribute()
/*
It adds or updates the attributes/properties
syntax: ele.setAttribute(name:string,value:string)
*/
// function setAttrFun() {
//   const h1 = document.getElementsByTagName("h1");
//   //   console.log(h1);
//   //   h1[1].setAttribute("class", "red");
//   h1[1].setAttribute("style", "color:blue");
//   //   h1[1].setAttribute("style", "color:green;background-color: blueviolet");
//   //   const input = document.querySelector("input");
//   //   input.setAttribute("type", "button");
// }

//getAttribute()
/*
used to get the value of specified attribute
syntax: ele.getAttribute(name:string)
*/

// function getAttrFun() {
//   const ele = document.querySelector("div");
//   console.log(ele.getAttribute("id"));
// }

//removeAttribute()
/*
removes the specified attribute from an element
syntax: ele.removeAttribute(name:string)
*/
// function removeAttrFun() {
//   const h1 = document.getElementsByTagName("h1");
//   h1[1].removeAttribute("style");
// }

//addEventListener
/*
used to attach an event to element
syntax: element.addEventListner(eventName:string, callBackFunction)
eventName:
click
dbclick
mouseover
mouseout
focus
blur
focusout
focusin
callBackFunction : tells the function what to do when an event occurs
*/
// document.addEventListener("click", myfun);
// document.addEventListener("click", myfun1);

// document.addEventListener("mouseover", myfun);
// document.addEventListener("mouseout", myfun1);

// let input = document.querySelector("input");
// input.addEventListener("focus", myfun);
// input.addEventListener("blur", myfun1);

// function myfun() {
//   //   console.log("clicked");
//   //   console.log("mouseover");
//   console.log("focus");
// }
// function myfun1() {
//   //   console.log("clicked 2");
//   //   console.log("mouseout");
//   console.log("blur");
// }
//removeEventListner
/*
used to remove an event that has been attached with addEventListner from element
syntax: element.removeEventListner(eventName:string, callBackFunction)
eventName:
*/
// let button = document.querySelector("button");
// button.addEventListener("click", remove);
// function remove() {
//   //   input.removeEventListener("focus", myfun);
//   input.removeEventListener("blur", myfun1);
// }

//excercise
var array = [
  {
    name: "Bangalore",
    color: "red"
  },
  {
    name: "Chennai",
    color: "green"
  },
  {
    name: "Mumbai",
    color: "pink"
  },
  {
    name: "Pune",
    color: "yellow"
  },
  {
    name: "Delhi",
    color: "blue"
  }
];

// const cities = ["Bangalore", "Chennai", "Hyderabad"];

//function createList() {
// const ul = document.createElement("ul");
// for (let i = 0; i < cities.length; i++) {
//   const li = document.createElement("li");
//   const city = document.createTextNode(cities[i]);
//   li.appendChild(city);
//   ul.appendChild(li);
// }
// for (let i = 0; i < array.length; i++) {
//   const li = document.createElement("li");
//   const city = document.createTextNode(array[i].name);
//   li.appendChild(city);
//   // li.setAttribute("style", `color: ${array[i].color}`);
//   li.style.color = array[i].color;
//   ul.appendChild(li);
// }
// document.body.appendChild(ul);
// const select = document.querySelector("select");
// for (let i = 0; i < array.length; i++) {
//   const option = document.createElement("option");
//   const text = document.createTextNode(array[i].name);
//   option.appendChild(text);
//   select.appendChild(option);
// }
//}
var states = [
  {
    state: "Karnataka",
    city: "Bangalore"
  },
  {
    state: "Tamilnadu",
    city: "Chennai"
  },
  {
    state: "Telangana",
    city: "Hyderabad"
  },
  {
    state: "Mahrashtra",
    city: "Mumbai"
  },
  {
    state: "Delhi",
    city: "New Delhi"
  }
];
// let stateDropdown = document.getElementById("stateDropdown");
// for (let i = 0; i < states.length; i++) {
//   let option = document.createElement("option");
//   let state = document.createTextNode(states[i].state);
//   option.appendChild(state);
//   stateDropdown.appendChild(option);
// }
// let cityDropdown = document.createElement("select");
// document.body.appendChild(cityDropdown);
// cityDropdown.style.display = "none";
// function selected(data) {
//   // console.log(data);
//   // let cityDropdown = document.getElementById("cityDropdown");
//   cityDropdown.innerHTML = "";
//   for (let i = 0; i < states.length; i++) {
//     if (states[i].state == data) {
//       let option = document.createElement("option");
//       let state = document.createTextNode(states[i].city);
//       option.appendChild(state);
//       cityDropdown.appendChild(option);
//     }
//   }
//   cityDropdown.style.display = "inline-block";
// }

// const ul = document.createElement("ul");
// var j = 0;
// var clear = setInterval(() => {
//   for (let i = 0; i < j + 1; i++) {
//     var li = document.createElement("li");
//     const text = document.createTextNode(states[i].state);
//     li.appendChild(text);
//   }
//   ul.appendChild(li);
//   j++;
//   if (j == 3) clearInterval(clear);
// }, 1000);
// document.body.appendChild(ul);

const para = document.createElement("p");
function changesFun(value) {
  para.innerHTML = "";
  console.log(value);
  const text = document.createTextNode(value);
  para.appendChild(text);
  document.body.appendChild(para);
}
