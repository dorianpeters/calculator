let storedNum = null;
let activeNum = null;
let operator = null;
let priorButtonOperator;

const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");

display.textContent = 0;

buttons.addEventListener("click", (event) => {
  const buttonPressed = event.target.textContent; // stores button clicked

  if (isNum(buttonPressed)) {
    // if a number is pressed
    if (operator === null || activeNum === null) {
      display.textContent = "";
      priorButtonOperator = false;
    }
    // and the prior button pressed was an operator, clear display before showing new number
    if (priorButtonOperator) {
      display.textContent = "";
      priorButtonOperator = false;
    }
    // display the number pressed
    display.textContent += buttonPressed;
    // after each number is  pressed, stored the number as a number.
    storedNum = Number(display.textContent);
  } else if (isOperator(buttonPressed)) {
    // if an operator is pressed
    priorButtonOperator = true;
    operator = buttonPressed;
    activeNum = Number(display.textContent);
  } else if (buttonPressed === "=") {
    display.textContent = operate(storedNum, operator, activeNum);
  } else if (buttonPressed === "C") {
    clearAll();
  } else {
    alert("case default");
  }
});

// Functions
function operate(num1, operator, num2) {
  let result = 0;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) result = num1 / num2;
      break;
  }
  return result;
}

function clearAll() {
  storedNum = null;
  activeNum = null;
  operator = null;
  display.textContent = 0;
}

function isNum(num) {
  return !isNaN(num);
}

function isOperator(char) {
  return ["+", "-", "*", "/"].includes(char);
}
