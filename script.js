//BUTTONS VARIABLES
let deleteOneDigit = document.querySelector('#delete-digit');
let deleteAll = document.querySelector('#delete-all');
let operationsButton = document.querySelectorAll('#op');
let equal = document.querySelector('#long-button');
let numbersOnCal = document.querySelectorAll('#num');
let currentOperationDisply = document.querySelector('#current-operation');
let previousOperationDisplay = document.querySelector('#previous-operation');

let currentNumberString = '';
let firstOperant = null;
let secondOperant = null;

//PRESSED NUMBERS 
numbersOnCal.forEach((digit) => {
    digit.addEventListener('click', (event) =>{
        currentNumberString += event.target.innerHTML;
        displayNumber(currentNumberString);
    });
});

//DISPLAY THE SELECTED NUMBERS 
function displayNumber(number){
    previousOperationDisplay.textContent = number;
}

//AN OPERATION IS PRESSED
operationsButton.forEach((opra) => {
    opra.addEventListener('click', () => {
        firstOperant = parseFloat(currentNumberString);
        currentNumberString += (' '+opra.innerHTML+' ');
        displayNumber(currentNumberString);
    })
});



