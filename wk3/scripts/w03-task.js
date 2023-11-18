/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(num1, num2){
    return num1 + num2;
}
function addNumber() {
    //read from input
    const num1 = parseInt(document.getElementById("add1").value);
    const num2 = parseInt(document.getElementById("add2").value);
    //get sum of numbers
    const sum = add(num1,num2);
    //set into answer
    const answer = document.getElementById("sum").value = sum;
}
document.getElementById("addNumbers").addEventListener("click", addNumber);

/* Function Expression - Subtract Numbers */
const subtract = function sub(num1, num2){
    return num1 - num2;
}
function subtractNumbers() {
    //read from input
    const num1 = parseInt(document.getElementById("subtract1").value);
    const num2 = parseInt(document.getElementById("subtract2").value);
    //get sum of numbers
    const sum = subtract(num1,num2);
    //set into answer
    const answer = document.getElementById("difference").value = sum;
}
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (num1, num2) => num1 * num2;

function multiplyNumbers() {
    //read from input
    const num1 = parseInt(document.getElementById("factor1").value);
    const num2 = parseInt(document.getElementById("factor2").value);
    //get sum of numbers
    const sum = multiply(num1,num2);
    //set into answer
    const answer = document.getElementById("product").value = sum;
}
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (num1, num2) => num1 / num2;

function divideNumbers() {
    //read from input
    const num1 = parseInt(document.getElementById("dividend").value);
    const num2 = parseInt(document.getElementById("divisor").value);
    //get sum of numbers
    const sum = divide(num1,num2);
    //set into answer
    const answer = document.getElementById("quotient").value = sum;
}
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
//declare numeric value entered into subtotal
const maths = (subtotal, discount) => (subtotal - (subtotal * discount));

function getTotalDue() {
    //read from input
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    let discount = 0;
    const member = document.getElementById("member").value;
    if (document.getElementById('member').checked){
        discount = .2;//the assignment form says 15 but rubric says 20% so went with 20
    }
    else {
        discount = 0;
    }
    //do math
    const sum = maths(subtotal, discount)
    const answer = document.querySelector("#total").innerHTML = `$${sum.toFixed(2)}`;

    //template string uses `
}
document.getElementById("getTotal").addEventListener("click", getTotalDue);

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Source Array */
document.getElementById("array").innerHTML = numbersArray;

/* Output Odds Only Array */
var oddNumbers = numbersArray.filter(function(number){
    return number % 2 !== 0;
})
document.getElementById('odds').innerHTML = oddNumbers;

/* Output Evens Only Array */
var evenNumbers = numbersArray.filter(function(number){
    return number % 2 === 0;
})
document.getElementById('evens').innerHTML = evenNumbers;

/* Output Sum of Org. Array */
function sumArray(arr){
    var sum = arr.reduce(function (adder, currentNumber){
        return adder + currentNumber;
    }, 0);
    return sum;
}
var arraySum = sumArray(numbersArray);
document.getElementById("sumOfArray").innerHTML = arraySum;
/* Output Multiplied by 2 Array */
//multiplied
var multipliedNumbers = numbersArray.map(function(number) {
    return number * 2;
  });

document.getElementById('multiplied').innerHTML = multipliedNumbers;
/* Output Sum of Multiplied by 2 Array */
//sumOfMultiplied
var sumOfMultiplied = multipliedNumbers.reduce(function(added, currentValue) {
    return added + currentValue;
  }, 0);
document.getElementById('sumOfMultiplied').innerHTML = sumOfMultiplied;