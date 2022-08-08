function setDefaultTxt() {
  return "Hi!";
}
function f1(from, txt = setDefaultTxt()) {
  if (txt === "Hi!") {
    from = "***" + from + "!!!";
    alert(`${from} - ${txt}`);
    return from;
  }
  return from + "!";
}

let name = "Anna";

function myAction() {
  //name = f1(name);
  name = f1("Joe");
  console.log(name);
  // console.log(name);
  // // name = f1(name, "Hi!");
  // // console.log(name);
  // name = f1(name, "Welcome");
  // console.log(name);
}

document.getElementById("myBtn").onclick = myAction;
