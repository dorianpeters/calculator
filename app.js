let storedNum = null;
let activeNum = null;
let operator = null;
let priorButtonOperator;

const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");

display.textContent = 0;

buttons.addEventListener("click", (event) => {
  const buttonPressed = event.target.textContent;

  if (isNum(buttonPressed)) {
    if (operator === null || activeNum === null) {
      display.textContent = "";
      priorButtonOperator = false;
    }
    if (priorButtonOperator) {
      display.textContent = "";
      priorButtonOperator = false;
    }
    display.textContent += buttonPressed;
    storedNum = Number(display.textContent);
  } else if (isOperator(buttonPressed)) {
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
