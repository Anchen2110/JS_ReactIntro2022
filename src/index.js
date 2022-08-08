// var pizza = true;

// var pizza = false;
//const pizza=true;

// let pizza=true;
// pizza=1;

//let userName="Anna";
function askUserName() {
  let userName = prompt("Input your name:", "Anna");
  return userName;
}

function test1() {
  var user = "Anna";
  if (user === "Anna") {
    var user = "Joe";
    console.log(user);
  }
  console.log(user);
}

function test2() {
  var user = "Anna";
  if (user === "Anna") {
    let user = "Joe";
    console.log(user);
  }
  console.log(user);
}

function divsGenerator() {
  var root = document.getElementById("app");
  var myDiv;
  for (var i = 0; i < 5; i++) {
    myDiv = document.createElement("div");
    myDiv.onclick = function () {
      alert("My div #" + i);
    };
    root.appendChild(myDiv);
  }
}

function divsGenerator1() {
  var root = document.getElementById("app");
  var myDiv;
  for (let i = 0; i < 5; i++) {
    myDiv = document.createElement("div");
    myDiv.onclick = function () {
      alert("My div #" + i);
    };
    root.appendChild(myDiv);
  }
}

function myAction() {
  let a = 10;
  let b = 25.4;
  let msgTempl = `WElcome, ${askUserName()}. Your 1st number is ${a}, 2nd one - ${b}`;
  document.getElementById("app").innerHTML = msgTempl;
  // document.getElementById("app").innerHTML = "Welcome!" + askUserName();
  // test2();
  divsGenerator1();
}
document.getElementById("myBtn").onclick = myAction;
