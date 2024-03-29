/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){return number1 + number2};
function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value)
    let addNumber2 = Number(document.querySelector('#add2').value)
    document.querySelector('#sum').value = add(addNumber1, addNumber2)
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */
const subtract = function(subtract1, subtract2){return subtract1 - subtract2};
const subtractNumbers = function(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value)
    let subtractNumber2 = Number(document.querySelector('#subtract2').value)
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2)
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => `${factor1 * factor2}`;
const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value)
    let multiplyNumber2 = Number(document.querySelector('#factor2').value)
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2)
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor){return dividend / divisor}
function divideNumbers(){
    let dividendNumber = Number(document.querySelector('#dividend').value)
    let divisorNumber = Number(document.querySelector('#divisor').value)
    document.querySelector('#quotient').value = divide(dividendNumber, divisorNumber)
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)

/* Decision Structure */
function getTotal(){
let total = 0
let subtotal = parseFloat(document.getElementById('subtotal').value);
if (document.getElementById('member').checked){
    total = subtotal - subtotal*0.2
} else{total = subtotal}
document.getElementById('total').textContent = total}
document.getElementById('getTotal').addEventListener('click', getTotal)

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = ['1','2','3','4','5','6','7','8','9','10','11','12','13'];
document.querySelector('#array').textContent = numbersArray
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 ===1);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 ===0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce();
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map();
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map();