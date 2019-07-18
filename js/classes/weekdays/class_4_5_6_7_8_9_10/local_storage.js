//localStorage && sessionStorage
/*
The localStorage and sessionStorage allows us to save some data on browser
in the form of key and value pair.
*/
//Difference
/*
The localStorage - stores the data with no expiry date (till we manually clear the data). 
The data will be available after closing the browser also.
The sessionStorage - stores the data and will be available for that session only.
The data will not be available after closing the browser.
*/

//saving the data
/*
syntax: localStorage.setItem("key","value");
syntax: sessionStorage.setItem("key","value");
*/
// function localStorageSetItem() {
//   localStorage.setItem("name", "Peter Parker");
// }
// function sessionStorageSetItem() {
//   sessionStorage.setItem("name", "Peter Parker");
// }

//getting the data
/*
syntax: localStorage.getItem("key");
syntax: sessionStorage.getItem("key");
*/
// function localStorageGetItem() {
//   console.log(localStorage.getItem("name"));
// }
// function sessionStorageGetItem() {
//   console.log(sessionStorage.getItem("name"));
// }
//removing the data
/*
syntax: localStorage.removeItem("key");
syntax: sessionStorage.removeItem("key");
*/
// function localStorageRemoveItem() {
//   localStorage.removeItem("name");
// }
// function sessionStorageRemoveItem() {
//   sessionStorage.removeItem("name");
// }

//clear()
// function clearAllSS() {
//   sessionStorage.clear(); //removes all saved data from session storage
// }
