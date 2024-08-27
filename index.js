// index.js
const sum = require("./sum");
const multiply = require("./multiplication");
const divide = require("./division");
const substract = require("./subtraction");

let operation = process.argv[2];

if(operation === "sum") {
let sumA = Number(process.argv[3]);
let sumB = Number(process.argv[4]);
let sumResult = sum(sumA, sumB);
console.log(sumResult);
}

if(operation === "multiply") {
let mulA =  Number(process.argv[3]);
let mulB = Number(process.argv[4]);
let mulResult = multiply(mulA, mulB);
console.log(mulResult);
}

if(operation === "divide") {
let divA =  Number(process.argv[3]);
let divB = Number(process.argv[4]);
if (divB === 0) {
    return console.log("Can't divide by 0");  
}
let divResult = divide(divA, divB);
console.log(divResult);
}

if(operation === "substract") {
let subA =  Number(process.argv[3]);
let subB = Number(process.argv[4]);
let subResult = substract(subA, subB);
console.log(subResult);
}


