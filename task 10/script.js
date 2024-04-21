var P = 309650; // Principal amount
var r = 0.05; // Rate of interest (5%)
var n = 12; // Number of times interest is compounded per year
var t = 3; // Time in years

// Calculate compound interest using the formula
var A = Math.round(P * Math.pow(1 + (r / n), n * t));

var compoundInterest = A - P;
console.log("The compound interest after " + t + " years is: " + compoundInterest.toFixed(2));
document.writeln(`<h1>The compound interest after ${t} years is: ${+ compoundInterest.toFixed(2)}</h1> `)