//concat
/*
used to combine two or more arrays
will not change the original array
return : new combined array
syntax :  array1.concat(array2, array3....arrayX)
*/

const fruits = ["Banana", "Apple", "Lemon", "Orange"];
// const vegetables = ["Potato", "Tomato", "Onion"];
// const mix = fruits.concat(vegetables);
// console.log("original", fruits);
// console.log("mixed", mix);

//fill
/*
used to fill specific elements in an array
will modify original array
syntax : array.fill(value,start,end)
value : Required
start : optional, index to start filling (starts from 0)
end : optional, index to stop filling (not included)
returned value : changed array
*/
// const filled = fruits.fill("mango"); // replace all
// const filled = fruits.fill("mango", 2, 3);
// const filled = fruits.fill("mango", 1); // everything from index 1
// const filled = fruits.fill("mango", 2, 4); // everything from index 2 (because there is no 4th index)
// const filled = fruits.fill("mango", -3); // starts from last(count will 1,2,3...)
// const filled = fruits.fill("mango", -3, 2);
// console.log(fruits);
// console.log(filled);

// toString()
/*
used to convert arrays into string
will not change the original array
retrun value : a string
*/
// const res = fruits.toString();
// // console.log(res);
// console.log(typeof res);
// console.log(fruits);

//reverse
/*
used to reverse the order of elements in an array
changes the original array
return : a reversed array
*/
// console.log(fruits.reverse());
// console.log(fruits);

//keys
/*
creates an iteration object from an array which will contain the keys
*/
// const keys = fruits.keys();
// console.log(keys);
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// for (i of keys) {
//   //   console.log(i);
//   console.log(fruits[i]);
// }

//includes
/*
checks whether an array contains a specific element
returns : true - if array contains the element
          false - if not
syntax: array.includes(element, start)
element is case sensitive
*/
// console.log(fruits.includes("Orange")); //true
// console.log(fruits.includes("orange")); //false
// console.log(fruits.includes("Apple", 2)); //false

//indexOf
/*
searches the array for specified items and returns its position
returns -1 if not found
syntax: array.indexOf(item, start)
*/
// console.log(fruits.indexOf("Lemon"));

//lastIndexOf
/*
searches the array for specified items from last and returns its position
returns -1 if not found
syntax: array.lastIndexOf(item, start)
*/
// console.log(fruits.lastIndexOf("Lemon"));
// console.log(fruits.lastIndexOf("Lemon", 2)); //2
// console.log(fruits.lastIndexOf("Lemon", -2)); //2

//join
/*
returns the array as string
will be seperated by some specific operator
Bydefault its comma(,)
synatx: array.join(seperator)
*/
// console.log(fruits.join());
// console.log(fruits.join("*"));

//find
/*
used to search any specific elements in an array
retruns the first matched elements
will not change the original array
will not be executed on empty array
returns undefined if not matches
syntax: array.find(callBackFunction(currentValue, index, array))
*/
// const ages = [10, 3, 22, 5, 4];
// const found = ages.find(greaterThan18);
// console.log(found);
// function greaterThan18(value, index) {
//   console.log(value, index);
//   return value >= 18;
// }

//findIndex
/*
used to search any specific elements in an array
retruns the first matched index
will not change the original array
will not be executed on empty array
returns -1 if not matches
syntax: array.findIndex(callBackFunction(currentValue, index, array))
*/
// const ages = [10, 3, 22, 5, 4];
// const found = ages.findIndex(greaterThan18);
// console.log(found);
// function greaterThan18(value, index) {
//   //   console.log(value, index);
//   return value >= 18;
// }

//excercise
const array = [10, 8, 32, 43, 96, 3, 7, 76, 60];
function myFunction(num) {
  // 1. item > num
  //2. new array having elements >=num
}
