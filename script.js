let currentInput = '';
let operator = null;
let previousInput = '';

const display = document.getElementById('display');

function updateDisplay(value) {
  display.value = value || '0';
}

function appendNumber(number) {
  if (currentInput === '0') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay(currentInput);
}

function appendOperator(op) {
  if (currentInput === '' && previousInput === '') return;

  if (currentInput !== '' && previousInput !== '') {
    calculate();
  }

  operator = op;
  previousInput = currentInput || previousInput;
  currentInput = '';
}

function calculate() {
  if (!operator || currentInput === '' || previousInput === '') return;

  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);
  let result = 0;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        alert('0으로 나눌 수 없습니다.');
        clearDisplay();
        return;
      }
      result = num1 / num2;
      break;
  }

  currentInput = String(result);
  operator = null;
  previousInput = '';
  updateDisplay(currentInput);
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  updateDisplay('0');
}