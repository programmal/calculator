// Operator input, fed input by user under a, op, and b.
const operate = function (a, op, b) { 
resultnum=0;
if (op == '+'){
add (a, b)    
} else if (op == '-'){
subtract (a, b)
} else if (op == '*'){
multiply (a, b)
} else if (op == '/'){
divide (a, b)
}}

// Addition, subtraction, multiplication, and division functions.
const add = function(num1, num2) {
    resultnum = num1+num2;
    console.log (resultnum) }

const subtract = function(num1, num2) {
    let subtracted = num1-num2;
    console.log (subtracted) }

const multiply = function(num1, num2) {
    let multiplied = num1*num2;
    console.log (multiplied) }

const divide = function(num1, num2) {
    let divided = num1/num2;
    console.log (divided) }

