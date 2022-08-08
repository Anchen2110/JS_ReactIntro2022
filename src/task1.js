const root = document.getElementById("app");

let sayHi = () => alert("Welcome!");

let adminUI = () => {
  let myImg = document.createElement("img");
  myImg.src =
    "https://previews.123rf.com/images/nimon/nimon1406/nimon140600002/28943602-cafe-late-coffee.jpg";
  root.appendChild(myImg);

  let admBtn = document.createElement("input");
  admBtn.setAttribute("type", "button");
  admBtn.onclick = sayHi;
  root.appendChild(admBtn);
};
let studentUI = () => {
  root.innerHTML =
    "<p>Espresso is generally thicker than coffee brewed by other methods, with a viscosity similar to that of warm honey.</p>";
};
let deafaultUI = () => {};

let checkUser = () => {
  let user = prompt("Who is?", "admin");
  if (user === "admin") {
    adminUI();
  } else if (user === "student") {
    studentUI();
  } else {
    deafaultUI();
  }
};

document.getElementById("myBtn").onclick = checkUser;
