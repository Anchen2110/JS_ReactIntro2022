// let myVar = myAction;
// myVar();

// let hiAnna = function () {
//   alert("Hi, Anna");
// };

// let hiAnna = () => {
//   alert("Hi, Anna");
//   console.log("11");
// };

//

// let hiStranger = function () {
//   alert("Welcome");
// };

// let showGreeting = function (ask, yes, no) {
//   window.confirm(ask) ? yes() : no();
// };

let showGreeting = (ask, yes, no) => (window.confirm(ask) ? yes() : no());
// let showGreeting = (ask, yes, no) =>
//   window.confirm(ask)
//     ? function () {
//         alert("Hi, Anna");
//       }
//     : () => alert("Welcome");

let myTets = (n) => console.log(n);

let myAction = function () {
  // alert("Anna");
  //showGreeting("Anna?", hiAnna, hiStranger);
  // showGreeting(
  //   "Anna?",
  //   function () {
  //     alert("Hi, Anna");
  //   },
  //   () => alert("Welcome")
  // );

  showGreeting(
    "Anna?",
    () => alert("Hi, Anna"),
    () => alert("Welcome")
  );
  myTets(11111);
};

document.getElementById("myBtn").onclick = myAction;

// function myAction() {
//   alert("Joe");
// }
