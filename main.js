//EVENT LISTENERS
document.getElementById("btn").addEventListener("click", btnClicked);

// DEFINING VARIABLES
x1 = document.getElementById("x1");
x2 = document.getElementById("x2");
x2 = document.getElementById("x2");
y1 = document.getElementById("y1");
y2 = document.getElementById("y2");
y3 = document.getElementById("y3");

function btnClicked() {
  document.getElementById("output").innerHTML = calculate;
}

//DISTANCE CALCULATOR
function dist(xA, yA, xB, yB) {
  return Math.sqrt((yB - yA) ** 2 + (xB - xA) ** 2);
}
//MAIN CALCULATOR
function calculate(BA, BC, AC) {
  let BA = +dist(x1, y1, x2, y2);
  let BC = +dist(x2, y2, x3, y3);
  let AC = +dist(x1, y1, x3, y3);
  return BA + BC + AC;
}
