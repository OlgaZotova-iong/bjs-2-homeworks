"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b * b - 4 * a * c;

    if (d < 0) {
      return arr;
    }

    if (d === 0) {
      let x = -b / (2 * a);
      arr.push(x);
      return arr;
    }

    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
let monthlyPercent = (percent / 100) / 12;
    let loanBody = amount - contribution;
    let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));
    let totalPayment = monthlyPayment * countMonths;
    let roundedTotalPayment = Number(totalPayment.toFixed(2));
    return roundedTotalPayment;
  
}