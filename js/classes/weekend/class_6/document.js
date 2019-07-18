//getElementById()
/*
used to get the element by specific id
syntax: document.getElementById(id);
id: string, required
returns: element of specific id
            null if there is no element
if there are more than one element with this id,
then the first element will be returned
*/
// function getById() {
//   let ele = document.getElementById("myId");
//   console.log(ele);
//   console.log(ele.tagName); //returns tag name
//   ele.style.color = "white"; // chnages the styles
//   ele.style.backgroundColor = "red";
//   document.body.style.backgroundColor = "silver"; // changes the style for body
// }

//getElementsByClassName()
/*
used to get the element by class name
syntax: document.getElementsByClassName(className);
className: string, required
returns: list of elements of class name
        null, if there is no element      
*/
// function getByClass() {
//   let ele = document.getElementsByClassName("myClass");
//   console.log(ele);
//   console.log(ele[0]);
//   console.log(ele[0].tagName);
//   ele[0].style.backgroundColor = "red";
//   ele[1].style.color = "red";
// }

//getElementsByTagName
