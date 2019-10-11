// local & session storage
/*
Allows to save the data in key/value pair in a web browser
local storage keeps the data for a day, week, months or year also untill we manually clear it.
session storage data will be lost once we close the browser
*/

//saving the data
/*
syntax: localStorage.setItem('key','value');
syntax: sessionStorage.setItem('key','value');
*/
function setLocal() {
  localStorage.setItem("name", "Bruce Wyane");
  localStorage.setItem("fName", "Peter");
  localStorage.setItem("lName", "Parker");
  //   localStorage.setItem("name", ["Bruce Wyane", "Peter Parker"]);
}
function setSession() {
  sessionStorage.setItem("name", "Bruce Wyane");
  sessionStorage.setItem("fName", "Pter");
  sessionStorage.setItem("lName", "Parker");
}

//getting the data
/*
syntax: localStorage.getItem('key');
syntax: sessionStorage.getItem('key');
*/
// console.log(localStorage.getItem("name"));
// console.log(sessionStorage.getItem("name"));

//removing the data
/*
syntax: localStorage.removeItem('key');
syntax: sessionStorage.removeItem('key');
*/
function removeLocal() {
  //   localStorage.removeItem("name");
  localStorage.clear(); //remove all local storage data
}
function removeSession() {
  //   sessionStorage.removeItem("name");
  sessionStorage.clear(); //remove all session storage data
}
