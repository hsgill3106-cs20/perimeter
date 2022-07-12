//EVENT LISTENERS
document.getElementById("btn").addEventListener("click", btnClicked);
function btnClicked() {
  let xA = +document.getElementById("xA").value;
  let yA = +document.getElementById("yA").value;
  let xB = +document.getElementById("xB").value;
  let yB = +document.getElementById("yB").value;
  let xC = +document.getElementById("xC").value;
  let yC = +document.getElementById("yC").value;
  calculate(xA, yA, xB, yB, xC, yC);
}
// DEFINING VARIABLES

//DISTANCE CALCULATOR
function dist(x1, y1, x2, y2) {
  return Math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2);
}
//MAIN CALCULATOR
function calculate(xA, yA, xB, yB, xC, yC) {
  let AB = +dist(xA, yA, xB, yB);
  let BC = +dist(xB, yB, xC, yC);
  let AC = +dist(xA, yA, xC, yC);
  let perimeter = AB + BC + AC;
  let outputP = "The Perimeter is " + perimeter;
  let outputAB = "AB = " + AB;
  let outputBC = "BC = " + BC;
  let outputAC = "AC = " + AC;
  document.getElementById("outputP").innerHTML = outputP;
  document.getElementById("outputAB").innerHTML = outputAB;
  document.getElementById("outputBC").innerHTML = outputBC;
  document.getElementById("outputAC").innerHTML = outputAC;
}
