// Display logic
let store = "0";
let a = 0;
let b = 0;
let op = '';
let resultnum = 0;
const display = document.querySelector ("#calcDisplay")
const displaynumbers = document.createElement ('p');
displaynumbers.className = "displaynums";
display.append (displaynumbers);
displaynumbers.innerHTML = store;

// Button creation and display
 const calc = document.querySelector (".calculator")
 const plus = document.createElement ('button')
 plus.innerHTML = "+";
 const minus = document.createElement ('button')
 minus.innerHTML = "-";
 const mult = document.createElement ('button')
 mult.innerHTML = "*";
 const divid = document.createElement ('button')
 divid.innerHTML = "/";
 const clear = document.createElement ('button')
 clear.innerHTML = "C";
 const one = document.createElement ('button')
 one.innerHTML = "1";
 const two = document.createElement ('button')
 two.innerHTML = "2";
 const three = document.createElement ('button')
 three.innerHTML = "3";
 const four = document.createElement ('button')
 four.innerHTML = "4";
 const five = document.createElement ('button')
 five.innerHTML = "5";
 const six = document.createElement ('button')
 six.innerHTML = "6";
 const seven = document.createElement ('button')
 seven.innerHTML = "7";
 const eight = document.createElement ('button')
 eight.innerHTML = "8";
 const nine = document.createElement ('button')
 nine.innerHTML = "9";
 const zero = document.createElement ('button')
 zero.innerHTML = "0";
 const equals = document.createElement ('button')
 equals.innerHTML = "=";
 const decpoint = document.createElement ('button')
 decpoint.innerHTML = ".";
 calc.append (plus);
 calc.append (minus);
 calc.append (mult);
 calc.append (divid);
 calc.append (clear);
 calc.append (one);
 calc.append (two);
 calc.append (three);
 calc.append (four);
 calc.append (five);
 calc.append (six);
 calc.append (seven);
 calc.append (eight);
 calc.append (nine);
 calc.append (zero);
 calc.append (decpoint);
 calc.append (equals);

 // button logic
 one.addEventListener ('click', () => {
if (store == "0") {
store = "1"
displaynumbers.innerHTML = store;
} else if (store > 0){
 store += '1';
 displaynumbers.innerHTML = store;
}})

two.addEventListener ('click', () => {
    if (store == "0") {
    store = "2"
    displaynumbers.innerHTML = store;
    } else if (store > 0){
     store += "2";
     displaynumbers.innerHTML = store;
    }})

three.addEventListener ('click', () => {
    if (store == "0") {
    store = "3"
    displaynumbers.innerHTML = store;
    } else if (store > 0){
     store += "3";
     displaynumbers.innerHTML = store;
    }})

four.addEventListener ('click', () => {
    if (store == "0") {
    store = "4"
    displaynumbers.innerHTML = store;
    } else if (store > 0){
     store += "4";
     displaynumbers.innerHTML = store;
    }})

five.addEventListener ('click', () => {
    if (store == "0") {
    store = "5"
    displaynumbers.innerHTML = store;
    } else if (store > 0){
     store += "5";
     displaynumbers.innerHTML = store;
    }})

six.addEventListener ('click', () => {
    if (store == "0") {
    store = "6"
    displaynumbers.innerHTML = store;
    } else if (store > 0){
     store += "6";
     displaynumbers.innerHTML = store;
    }})

seven.addEventListener ('click', () => {
    if (store == "0") {
    store = "7"
    displaynumbers.innerHTML = store;
    } else if (store > 0){
     store += "7";
     displaynumbers.innerHTML = store;
    }})

eight.addEventListener ('click', () => {
    if (store == "0") {
    store = "8"
    displaynumbers.innerHTML = store;
    } else if (store > 0){
     store += "8";
     displaynumbers.innerHTML = store;
    }})

nine.addEventListener ('click', () => {
        if (store == "0") {
        store = "9"
        displaynumbers.innerHTML = store;
        } else if (store > 0){
         store += "9";
         displaynumbers.innerHTML = store;
        }})

zero.addEventListener ('click', () => {
        if (store == "0") {
        store = "0"
        displaynumbers.innerHTML = store;
        } else if (store > 0){
         store += "0";
         displaynumbers.innerHTML = store;
        }})

decpoint.addEventListener ('click', () => {
    let decsearch = store.search(".");
    if (decsearch = -1){
         store += ".";
         displaynumbers.innerHTML = store;
        } else if (decsearch > -1){store+=""}})

clear.addEventListener ('click', () => {
    store = "0"
    a = 0
    b = 0
    resultnum = 0;
    displaynumbers.innerHTML = store;
      })

plus.addEventListener ('click', () => {
    op = '+'
    a += parseFloat(store);
    store = 0;
    console.log(a)
    displaynumbers.innerHTML = (" + ");
        })

minus.addEventListener ('click', () => {
    op = '-'
    a += parseFloat(store);
    store = 0;
    console.log(a)
    displaynumbers.innerHTML = (" - ");
        })

mult.addEventListener ('click', () => {
    op = '*'
    a += parseFloat(store);
    store = 0;
    console.log(a)
    displaynumbers.innerHTML = (" * ");
        })

divid.addEventListener ('click', () => {
    op = '/'
    a += parseFloat(store);
    store = 0;
    console.log(a)
    displaynumbers.innerHTML = (" / ");
        })

equals.addEventListener ('click', () => {
    b += parseFloat(store);
    console.log(b)
    operate (a, op, b)
    store = resultnum;
    a = 0
    b = 0
    displaynumbers.innerHTML = (resultnum);
        })


// Operator input, fed input by user under a, op, and b.
const operate = function (a, op, b) { ;
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
    resultnum = num1-num2;
    console.log (resultnum) }

const multiply = function(num1, num2) {
    resultnum = num1*num2;
    console.log (resultnum) }

const divide = function(num1, num2) {
    resultnum = num1/num2;
    console.log (resultnum) }

