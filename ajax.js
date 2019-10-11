//AJAX
//Asynchrnous Javascript And XML
//used to get the data from web server
//XMLHttpRequest Object

const http = new XMLHttpRequest();
function getData() {
  http.open("GET", "http://localhost:3000/getUser");
  //   http.open("GET", "https://api.myjson.com/bins/qes6a");
  http.send();
  http.onreadystatechange = function() {
    if (this.readyState == 4) {
      const res = JSON.parse(this.responseText);
      console.log(res);
    }
  };
}

function postData() {
  http.open("POST", "http://localhost:3000/user");
  const input = {
    name: "Bruce Wayne",
    age: 44,
    email: "wayne@gmail.com"
  };
  http.setRequestHeader("Content-type", "application/json");
  http.send(JSON.stringify(input));
  http.onreadystatechange = function() {
    if (this.readyState == 4) {
      const res = JSON.parse(this.responseText);
      console.log(res);
    }
  };
}

function deleteData() {
  http.open(
    "Delete",
    "http://localhost:3000/deleteUser/5d4faa3a2dabcc7670dffe7a"
  );
  http.setRequestHeader("Content-type", "application/json");
  http.send();
  http.onreadystatechange = function() {
    if (this.readyState == 4) {
      const res = JSON.parse(this.responseText);
      console.log(res);
    }
  };
}

function updateData() {
  http.open("PUT", "http://localhost:3000/updateUser/5d9fede465fddf27888a7fee");
  const input = {
    name: "Bruce Wayne",
    age: 54,
    email: "wayne@gmail.com"
  };
  http.setRequestHeader("Content-type", "application/json");
  http.send(JSON.stringify(input));
  http.onreadystatechange = function() {
    if (this.readyState == 4) {
      const res = JSON.parse(this.responseText);
      console.log(res);
    }
  };
}
