let storedNum = 0;
let activeNum = 0;
let operator = "=";
let priorButtonOperator;

const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");

buttons.addEventListener("click", (event) => {
  const buttonPressed = event.target.textContent;

  if (isNum(buttonPressed)) {
    if (priorButtonOperator) {
      display.textContent = "";
      priorButtonOperator = false;
    }
    display.textContent += event.target.textContent;
  } else if (isOperator(buttonPressed)) {
    activeNum = Number(display.textContent);
    priorButtonOperator = true;
    operator = buttonPressed;
    display.textContent = operate(storedNum, operator, activeNum);
    firstNum = Number(display.textContent);
  } else if (buttonPressed === "=") {
    alert("equals");
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
  firstNum = 0;
  secondNum = 0;
  tempNum = 0;
  operator = "";
  display.textContent = "";
}

function isNum(num) {
  return !isNan(num);
}

function isOperator(char) {
  return ["+", "-", "*", "/"].includes(char);
}
