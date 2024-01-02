let displayValue = '0';
let operator = '';
let firstOperand = null;

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function setOperator(op) {
    operator = op;
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
        displayValue = '0';
    } else {
        calculate();
    }
}

function calculate() {
    const secondOperand = parseFloat(displayValue);
    let result = 0;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
    }

    displayValue = result.toString();
    operator = '';
    firstOperand = null;
    updateDisplay();
}

// Initial display update
updateDisplay();