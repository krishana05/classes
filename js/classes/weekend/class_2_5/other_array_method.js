//concat
/*
used to combine two or more arrays
it will not change or original
return : will return new combined array
syntax : array1.concat(array2, array3.....arrayX)
*/
// var fruits = ["Banana", "Apple", "Lemon", "Orange"];
// var vegetable = ["Potato", "Tomato", "Onion"];
// var mix = fruits.concat(vegetable);
// console.log("original", fruits);
// console.log("mixed", mix);

// var state = ["Karnataka", "Tamilnadu", "Telangana", "Maharashtra"];
// var capital = ["Bangalore", "Chennai", "Hyderabad", "Mumbai"];
// var city = ["Mysore", "Salem", "Pune"];
// var mix = state.concat(capital, city);
// console.log("original", state);
// console.log("mixed", mix);

//fill
/*
this method fills the specific elements in an array
this will overwrite the original array
syntax : array.fill(value, start, end)
value : required
start: optional, index to start filling
end: optional, index to stop filling (not included)
Retuned value : an array, changed array
*/
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var filled = fruits.fill("Lemon");
// console.log("original array", fruits);
// console.log("filled array", filled);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var filled = fruits.fill("Lemon", 2, 3);
// var filled = fruits.fill("Lemon", 1);
// console.log("original array", fruits);
// console.log("filled array", filled);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var filled = fruits.fill("Lemon", -3);
// var filled = fruits.fill("Lemon", -3, 1);
// var filled = fruits.fill("Lemon", -3, 2);
// var filled = fruits.fill("Lemon", -3, 3);
// var filled = fruits.fill("Lemon", -3, 4);
// console.log("original array", fruits);
// console.log("filled array", filled);

// reverse
/*
reverses the order of elements in array
changes original array
return  : an array, revresed one
syntax: array.revrese()
*/
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var revresed = fruits.reverse();
// console.log(fruits);
// console.log(revresed);

// toString()
/*
used to convert arrays into string
will not change the original array
returned value : a string
*/
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var toSting = fruits.toString();
// console.log("original array", fruits);
// console.log("string array : ", toSting);
// console.log("original array type", typeof(fruits));
// console.log("string array type", typeof(toSting));

// keys
/* 
create an iteration object from any array
this iteration object will contain the keys of array
*/
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var fruitKey = fruits.keys();
// fruits[2] = "some Value";
// console.log(fruits[0]);
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// console.log(fruitKey);
// for (i of fruitKey) {
//   console.log(i);
// }

// includes
/*
checks whether an array contains a specific element
returns :  true - if array contains the element
          false - if not
          syntax: array.includes(element, start)
element :  required
element is case sensitive
start : optional (default 0) - index value
*/
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var isThere = fruits.includes("Mango");
// var isThere = fruits.includes("mango");
// console.log(isThere);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// // var isThere = fruits.includes("Banana", 0);
// var isThere = fruits.includes("Banana", 1);
// console.log(isThere);

// indexOf
/*
it searches the array for specified items and 
retuns its position
returns -1 if not found
if item is present more than once, 
it returns the position of first matched elements

syntax: array.indexOf(item, start)
item : required
start : optional (negative value will start from end)
item is case sensitive
*/
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var index = fruits.indexOf("Orange");
// var index = fruits.indexOf("orange");
// var index = fruits.indexOf("Lemon");
// console.log(index);

// var fruits = [
//   "Banana",
//   "Orange",
//   "Apple",
//   "Mango",
//   "Banana",
//   "Orange",
//   "Apple",
//   "Mango"
// ];
// var index = fruits.indexOf("Orange");
// var index = fruits.indexOf("Orange", 2);
// console.log(index);

// lastIndexOf
/*
it searches the array for specified items and 
retuns its position
returns -1 if not found
it returns the position of last matched elements
syntax: array.lastIndexOf(item, start)
item : required
start : optional (negative value will start from end),
starting index in the array from where the element is to be searched backwards.
item is case sensitive
*/
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var lastIndex = fruits.lastIndexOf("Orange");
// var lastIndex = fruits.lastIndexOf("orange");
// console.log(lastIndex);

// var fruits = [
//   "Banana",
//   "Orange",
//   "Apple",
//   "Mango",
//   "Banana",
//   "Orange",
//   "Apple",
//   "Mango"
// ];
// var lastIndex = fruits.lastIndexOf("Orange");
// var lastIndex = fruits.lastIndexOf("Orange", 1);
// var lastIndex = fruits.lastIndexOf("Orange", 6);
// var lastIndex = fruits.lastIndexOf("Orange", -1);
// console.log(lastIndex);

// join
/*
returns the array as atring
it will sperated by some specific seperator
by default its comma(,)
syntax: array.join(sperator)
seperator is optional
*/
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var joined = fruits.join();
// console.log(fruits);
// console.log(joined);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var joined = fruits.join("*");
// console.log(typeof joined);
// console.log(joined);

// find
/*
returns first matched elements in an array
will not chnage the original array
will no be executed on empty array
executes the passed function once for each elements:
if it matches and function returns true value, find() will return the value of that array
and it will not check the remaining value
if not, return undefined
syntax: array.find(callbackfunction(currentValue, index, array))
currentValue : Required (value of current element)
index : optional, array index of current element
array: optional, array object of current element
*/
// var ages = [10, 3, 22, 5, 4];
// function greaterThan18(age) {
//   console.log(age);
//   return age >= 18;
// }
// // var found = greaterThan18(20);
// var found = ages.find(greaterThan18);
// console.log("returned", found);

// var ages = [10, 3, 12, 25, 40];
// function greaterThan18(age) {
//   console.log(age);
//   return age >= 18;
// }
// var found = ages.find(greaterThan18);
// console.log("returned", found);

// findIndex
/*
returns first matched index in an array
will not chnage the original array
will no be executed on empty array
executes the passed function once for each elements:
if it matches and function returns true value, find() will return the index of that array
and it will not check the remaining value
if not, return -1
syntax: array.findIndex(callbackfunction(currentValue, index, array))
currentValue : Required (value of current element)
index : optional, array index of current element
array: optional, array object of current element
*/

// var ages = [10, 3, 22, 5, 4];
// function greaterThan18(age) {
//   console.log(age);
//   return age >= 18;
// }
// var found = ages.findIndex(greaterThan18);
// console.log("returned", found);

// var ages = [10, 3, 12, 25, 40];
// function greaterThan18(age) {
//   console.log(age);
//   return age >= 18;
// }
// var found = ages.findIndex(greaterThan18);
// console.log("returned", found);
