//BUTTONS VARIABLES
let deleteOneDigit = document.querySelector('#delete-digit');
let deleteAll = document.querySelector('#delete-all');
let operationsButton = document.querySelectorAll('#op');
let equal = document.querySelector('#long-button');
let numbersOnCal = document.querySelectorAll('#num');
let currentOperationDisply = document.querySelector('#current-operation');
let previousOperationDisplay = document.querySelector('#previous-operation');

let currentOperant = '';
let previousOperant = '';
let operation = undefined;

//PRESSED NUMBERS 
numbersOnCal.forEach((digit) => {
    digit.addEventListener('click', (event) =>{
        if(event.target.innerHTML === '.' && currentOperant.includes('.')){
            return;
        }
        currentOperant += event.target.innerHTML;
        display();
    });
});

//DISPLAY NUMBERS AND OPERATIONS
function display(){
    currentOperationDisply.textContent = currentOperant;
    if(operation != null){
        previousOperationDisplay.textContent = `${previousOperant} ${operation}`;
    }
    //previousOperationDisplay.textContent = previousOperant;
}

//AN OPERATION IS PRESSED
operationsButton.forEach((opra) => {
    opra.addEventListener('click', (val) => {
        if(currentOperant === '') return;
        if(previousOperant !== ''){
            perfomOperations();
        }
        operation = val.target.innerHTML;
        console.log(operation);
        previousOperant = currentOperant;
        currentOperant = '';
        display();
    })
});

//EQUAL BUTTON OPERATION 
equal.addEventListener('click', () => {
    //Check if both operands are available
    perfomOperations();
    display();
});

//PERFORM OPERATIONS
function perfomOperations(){
    let compute;
    const prev = parseFloat(previousOperant);
    const current = parseFloat(currentOperant);
    if (isNaN(prev) || isNaN(current)) return;
    switch(operation){
        case '+':
            compute = add(prev, current).toString().replace(/(\.\d*?[1-9])0+$/g, '$1');
            break;
        case '-':
            compute = subs(prev, current).toString().replace(/(\.\d*?[1-9])0+$/g, '$1');
            break;
        case '*':
            compute = mul(prev, current).toString().replace(/(\.\d*?[1-9])0+$/g, '$1');
            break;
        case '/':
            compute = div(prev, current).toString().replace(/(\.\d*?[1-9])0+$/g, '$1');
            break;
        case '%':
            compute = mod(prev, current).toString().replace(/(\.\d*?[1-9])0+$/g, '$1');
            break;
        default:
            return;
    }
    currentOperant = compute;
    operation = undefined;
    previousOperant = '';
    display();
}

//DELETE A SINGLE DIGIT
deleteOneDigit.addEventListener('click', () => {
    currentOperant = currentOperant.toString().slice(0, -1);
    display();
});

//DELETE ALL
deleteAll.addEventListener('click', () => {
    //Reset variables
    currentOperant = '';
    previousOperant = '';
    operation = undefined;
    currentOperationDisply.textContent = ''; // Clear the current display
    previousOperationDisplay.textContent = ''; // Clear the previous display
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
    let result = (a + b);
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
 






