let firstNum, secondNum, operator;

// Functions

function operate (num1, operator, num2) {
  switch (operator) {
    case '+':
      add(num1, num2);
    case '-':
      subtract(num1, num2);
    case '*':
      multiply(num1, num2);
    case '/':
      divide(num1, num2);
  }
}

function add(num1, num2) {
  return num1 + num2;	
};

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;	
}

function divide(num1, num2) {
	return num1 / num2;
}