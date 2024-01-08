//BUTTONS VARIABLES
let deleteOneDigit = document.querySelector('#delete-digit');
let deleteAll = document.querySelector('#delete-all');
let operationsButton = document.querySelectorAll('#op');
let equal = document.querySelector('#long-button');
let numbersOnCal = document.querySelectorAll('#num');
let currentOperationDisply = document.querySelector('#current-operation');
let previousOperationDisplay = document.querySelector('#previous-operation');

let currentNumberString = '';
let previousNumberString = '';
let firstOperant = null;
let secondOperant = null;

//PRESSED NUMBERS 
numbersOnCal.forEach((digit) => {
    digit.addEventListener('click', (event) =>{
        currentNumberString += event.target.innerHTML;
        previousNumberString += event.target.innerHTML;
        displayNumber(previousNumberString);
    });
});

//DISPLAY THE SELECTED NUMBERS 
function displayNumber(number){
    previousOperationDisplay.textContent = number;
}

//DISPLAY THE RESULT
function displayResult(result){
    currentOperationDisply.textContent = result;
}

//AN OPERATION IS PRESSED
operationsButton.forEach((opra) => {
    opra.addEventListener('click', () => {
        firstOperant = parseFloat(currentNumberString);
        previousNumberString += (' '+opra.innerHTML+' ');
        displayNumber(previousNumberString);
        currentNumberString = '';
    })
});

//EQUAL BUTTON OPERATION 
equal.addEventListener('click', () => {
    //Check if both operands are available
    if (firstOperant !== null && currentNumberString.trim() !== '') {
        secondOperant = parseFloat(currentNumberString);

        perfomOperations();
    }
});

//PERFORM OPERATIONS
function perfomOperations(){
    if(previousNumberString.includes('+')){
        let result = add(firstOperant, secondOperant);
        update(result);
    }
    else if (previousNumberString.includes('-')){
        let result = subs(firstOperant, secondOperant);
        let rounded = result.toString().replace(/(\.\d*?[1-9])0+$/g, '$1');
        update(rounded);
    }
    else if (previousNumberString.includes('x')){
        let result = mul(firstOperant, secondOperant);
        let rounded = result.toString().replace(/(\.\d*?[1-9])0+$/g, '$1');
        update(rounded);
    }
    else if (previousNumberString.includes('/')){
        let result = div(firstOperant, secondOperant);
        let rounded = result.toString().replace(/(\.\d*?[1-9])0+$/g, '$1');
        update(rounded);
    }
    else if (previousNumberString.includes('%')){
        let result = mod(firstOperant, secondOperant);
        let rounded = result.toString().replace(/(\.\d*?[1-9])0+$/g, '$1');
        update(rounded);
    }
}

//DELETE A SINGLE DIGIT
deleteOneDigit.addEventListener('click', () => {
    currentNumberString = currentNumberString.slice(0, -1);
    previousNumberString = previousNumberString.slice(0, -1);
    displayNumber(previousNumberString);
});

//DELETE ALL
deleteAll.addEventListener('click', () => {
    currentNumberString = '';
    previousNumberString = '';
    displayNumber(previousNumberString);
});

//UPDATE
function update(result){
    // Display the result
    displayResult(result);

    // Update variables for the next operation
    firstOperant = result;
    currentNumberString = '';
}

// ADD NUMBERS
function add(a, b) {
    let result = (a + b).toFixed(7);
    return parseFloat(result);
}

//SUBTRACT  
function subs(a,b){
    let result = (a - b).toFixed(7);
    return parseFloat(result);
}

//MULITPLY
function mul(a,b){
    if ( a===0 || b===0 ){
        return 0;
    }
    else{
        let result = (a * b).toFixed(7);
        return parseFloat(result);
    }
}

//DIVIDE
function div(a,b){
    if(b===0){
        return 'ERROR';
    } else if (a===0){
        return 0;
    }
    else{
        let result = (a / b).toFixed(7);
        return parseFloat(result);
    }
}

//MODULO
function mod(a,b){
    if(b===0){
        return 'ERROR'
    } else if(a===0){
        return 0;
    }
    else {
        let result = (a % b).toFixed(7);
        return parseFloat(result);
    }
}
 






