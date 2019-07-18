// map , sort, filter, reduce
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

var ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// //for
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
//   console.log(companies[i].name);
// }
// forEach
//companies.forEach(function(company, index) {
//console.log(index);
//console.log(company);
//console.log(company.name);
//console.log(company.category);
//});

// get ages >=
// var canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

// filter - filter the data based on some condition
// var canDrink = ages.filter(function(age) {
//   //console.log(age);
//   if (age >= 21) {
//     return true;
//   }
// });
// var canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// const retailCompanies = companies.filter(function(company) {
//   if (company.category === "Retail") {
//     return true;
//   }
// });
// const retailCompanies = companies.filter(
//   company => company.category === "Retail"
// );
// console.log(retailCompanies);

// Get 80s companies
// const eightiesCompanies = companies.filter(function(company) {
//   if (company.start >= 1980 && company.start <= 1990) {
//     return true;
//   }
// });
// const eightiesCompanies = companies.filter(
//   company => company.start >= 1980 && company.start <= 1990
// );
// console.log(eightiesCompanies);

// get the comapanies that lasted 10 years or more

// const lastedTenYears = companies.filter(function(company) {
//   if (company.end - company.start >= 10) {
//     return true;
//   }
// });
// const lastedTenYears = companies.filter(
//   company => company.end - company.start >= 10
// );
// console.log(lastedTenYears);

// map
/*
creates a new array from return values of callback function
syntax: array.map(callBackfunction)
returns : a new array (does not changes the original array)
*/
// create a array of company names
// let companyName = [];
// for (let i = 0; i < companies.length; i++) {
//   companyName.push(companies[i].name);
// }

// const companyName = companies.map(function(company) {
//   return company.name;
// });

// const companyName = companies.map(company => company.name);
// console.log(companyName);

// const companyCategory = companies.map(company => company.category);
// console.log(companyCategory);

// const test = companies.map(function(company) {
//   return 1;
// });
// const test = companies.map(company => 1);
// console.log(test);

// const testMap = companies.map(
//   company => `${company.name} [${company.start} - ${company.end}]`
// );
// console.log(testMap);

// const ageMap = ages.map(function(age) {
//   return Math.sqrt(age);
// });
// const ageMap = ages.map(age => Math.sqrt(age));
// console.log(ageMap);
// const agesTimesTwo = ages.map(function(age) {
//   return age * 2;
// });
// const agesTimesTwo = ages.map(age => age * 2);
// console.log(agesTimesTwo);
// const combinedMap = ages
//   .map(function(age) {
//     return Math.sqrt(age);
//   })
//   .map(function(age) {
//     return age * 2;
//   });
// const combinedMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);
// console.log(combinedMap);
// const powerMap = ages.map(function(age) {
//   return Math.pow(age, 2);
// });
// const powerMap = ages.map(age => Math.pow(age, 2));
// console.log(powerMap);

// sort
/*
used to sort an array
syntax: array.sort()// by default it sorts the value as string
        array.sort(callBackFunction)
It changes the original array
*/
// var fruits = ["Banana", "Apple", "Lemon", "Orange"];
// fruits.sort();
// fruits.reverse(); // revreses the order
// console.log(fruits);
// ages.sort();
// console.log(ages);
//increasing order
// ages.sort(function(a, b) {
//   return a - b;
// });
// ages.sort((a, b) => a - b);
//decreasing order
// ages.sort(function(a, b) {
//   return b - a;
// });
// ages.sort((a, b) => b - a);
// console.log(ages);
//sort company by start year
// const sortedCompanies = companies.sort(function(c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// ternary operator
// condition ?'if true':'if false'
// var num = 9;
// num > 10 ? console.log("greater") : console.log("lesser");
// const sortedCompanies = companies.sort((c1, c2) =>
//   c1.start > c2.start ? 1 : -1
// );
// console.log(sortedCompanies);

// reduce
/*
reduces the array elements to a single value
syntax: array.reduce(callBackFunction(total, currentElement))
return : the reduced results from the last call of the callBack function
and stored in the total
*/
// let agesSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   agesSum = agesSum + ages[i];
// }
// const agesSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);
// const agesSum = ages.reduce((total, age) => total + age, 0);
// console.log(agesSum);

// Get total years of all companies
// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);
// const totalYears = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );
// console.log(totalYears);

// Combine methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age > 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
