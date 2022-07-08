


//DISTANCE CALCULATOR
function dist(xA, yA, xB, yB) {
return Math.sqrt((yB - yA) ** 2 + (xB - xA) ** 2)
}
//MAIN CALCULATOR
function calculate() {
let AB = +dist(x1, y1, x2, y2)
let BC = +dist(x2, y2, x3, y3)
let AC = +dist(x1, y1, x3, y3)
return AB + BC + AC
} console.log(dist)