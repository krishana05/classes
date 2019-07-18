//splice
/* 
add/remove elements from an array
returns removed elements
syntax: array.splice(index, howmany,item1, item2...);
index is mandatory,
2nd and 3rd is optional
//modifies the original array
*/
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var a = fruits.splice(2, 1);
// var a = fruits.splice(1,3);
//var a = fruits.splice(-3,1);
// var a = fruits.splice(-3,2);
// var a = fruits.splice(2,0,'Kiwi');
// var a = fruits.splice(2,1,'Kiwi');
// var a = fruits.splice(-2,1,'Kiwi');
// console.log("selected", a);
// console.log("main array", fruits);
//slice
/* 
it returns selected elements
syntax : array.slice(start,end);
start : optional, integer
end : optional, integer, does not included the end arguments 
// it does not change the original array
*/
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var a = fruits.slice();
// var a = fruits.slice(1,3);
//var a = fruits.slice(-3,-1);
var a = fruits.slice(2,6);
console.log("selected", a);
console.log("main array", fruits);

