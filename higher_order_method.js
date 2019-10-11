//filter, sort, map and reduce
const companies = [
  {
    name: "Company One",
    category: "Finance",
    start: 1981,
    end: 2004
  },
  {
    name: "Company Two",
    category: "Retail",
    start: 1992,
    end: 2008
  },
  {
    name: "Company Three",
    category: "Auto",
    start: 1999,
    end: 2007
  },
  {
    name: "Company Four",
    category: "Retail",
    start: 1989,
    end: 2010
  },
  {
    name: "Company Five",
    category: "Technology",
    start: 2009,
    end: 2014
  },
  {
    name: "Company Six",
    category: "Finance",
    start: 1987,
    end: 2010
  },
  {
    name: "Company Seven",
    category: "Auto",
    start: 1986,
    end: 1996
  },
  {
    name: "Company Eight",
    category: "Technology",
    start: 2011,
    end: 2016
  },
  {
    name: "Company Nine",
    category: "Retail",
    start: 1981,
    end: 1989
  }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 24, 64, 32];

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 18) canDrink.push(ages[i]);
// }
// console.log(canDrink);

//filter - filter the data based on some condition
// const canDrink = ages.filter(function(age) {
//   if (age >= 18) return true;
// });

// const canDrink = ages.filter(age => age >= 18);
// console.log(canDrink);

// const retailCompanies = companies.filter(function(company) {
//   if (company.category == "Retail") return true;
// });
// const retailCompanies = companies.filter(
//   company => company.category == "Retail"
// );
// console.log(retailCompanies);

// Get 80s companies
// const eightiesCompanies = companies.filter(function(company) {
//   if (company.start >= 1980 && company.end <= 1990) return true;
// });
// const eightiesCompanies = companies.filter(
//   company => company.start >= 1980 && company.end <= 1990
// );
// console.log(eightiesCompanies);

//Get the comapnies that lasted 10 years or more (atleast 10 years)

// const lasted10Years = companies.filter(function(comapny) {
//   if (comapny.end - comapny.start >= 10) return true;
// });
// const lasted10Years = companies.filter(
//   comapny => comapny.end - comapny.start >= 10
// );
// console.log(lasted10Years);

//map - creates a new array from return values of callback function

//create an array of company names
// let companyName = [];
// for (let i = 0; i < companies.length; i++) {
//   companyName.push(companies[i].name);
// }

// const companyName = companies.map(company => company.name);
// console.log(companyName);
// const test = companies.map(company => 1);
// console.log(test);
// const testMap = companies.map(
//   company => `${company.name} [${company.start} - ${company.end}]`
// );
// console.log(testMap);

// const testAge = ages.map(age => age * 2);
// const testAge = ages.map(age => Math.sqrt(age));
// const testAge = ages.map(age => Math.sqrt(age)).map(age => age * 2);
// console.log(testAge);

//sort
// used to sort an array
// syntax: array.sort() //by default it sorts the value as string
// array.sort(callBackFunction)
// It changes the original array

// const fruits = ["Banana", "Apple", "Lemon", "Orange"];
// fruits.sort();
// fruits.reverse();
// console.log(fruits);
// ages.sort();// will not work
//increasing order
// ages.sort((a, b) => a - b);
//decreasing order
// ages.sort((a, b) => b - a);
// console.log(ages);

//sort the companies by start year
// const sortedCompanies = companies.sort(function(c1, c2) {
//   if (c1.start > c2.start) return 1;
//   return -1;
// });
// const sortedCompanies = companies.sort((c1, c2) =>
//   c1.start > c2.start ? 1 : -1
// );
// console.log(sortedCompanies);

//reduce
/*
reduces the array elements to a single value
syntax : array.reduce(callBackFunction(total,currentElement))
*/
// let sum = 0;
// for (let i = 0; i < ages.length; i++) {
//   sum = sum + ages[i];
// }
// console.log(sum);
// const agesSum = ages.reduce((total, age) => total + age, 0);
// console.log(agesSum);

// const totalYears = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );
// console.log(totalYears);

// combine methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age > 40)
  .sort((a, b) => a - b)
  .reduce((t, ele) => t + ele, 0);
console.log(combined);
