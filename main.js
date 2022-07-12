//EVENT LISTENERS
document.getElementById("btn").addEventListener("click", btnClicked);

// DEFINING VARIABLES
let xA = +document.getElementById(xA).value;

let yA = +document.getElementBYId(yA).value;

let xB = +document.getElementById(xB).value;

let yB = +document.getElementById(yB).value;

let xC = +document.getElementById(xC).value;

let yC = +document.getElementById(yC).value;

//DISTANCE CALCULATOR
function dist(xA, yA, xB, yB) {
  return Math.sqrt((yB - yA) ** 2 + (xB - xA) ** 2);
}
//MAIN CALCULATOR
function calculate(AB, BC, AC) {
  let AB = +dist(xA, yA, xB, yB);
  let BC = +dist(xB, yB, xC, yC);
  let AC = +dist(xA, yA, xC, yC);
  let perimeter = AB + BC + AC;

  output;
}
function btnClicked() {
  document.getElementById("output").innerHTML = perimeter;
}
