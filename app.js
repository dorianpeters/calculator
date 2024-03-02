let storedNum = null;
let activeNum = null;
let operator = null;
let priorButtonOperator;

const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");

display.textContent = 0;

buttons.addEventListener("click", (event) => {
  const buttonPressed = event.target.textContent; // stores button clicked
  console.log("Button: " + buttonPressed);
  // if a number is pressed
  if (isNum(buttonPressed)) {
    // and the prior button pressed was an operator, clear display before showing new number
    if (priorButtonOperator || display.textContent == 0) {
      display.textContent = "";
      priorButtonOperator = false;
    }
    // display the number pressed
    display.textContent += buttonPressed;
  } else if (isOperator(buttonPressed)) {
    // if an operator is pressed
    priorButtonOperator = true;
    operator = buttonPressed;
    if (storedNum === null) {
      storedNum = Number(display.textContent);
    } else {
      activeNum = Number(display.textContent);
    }
  } else if (buttonPressed === "=") {
    priorButtonOperator = true;
    if (storedNum === null) {
      storedNum = Number(display.textContent);
    } else {
      activeNum = Number(display.textContent);
    }
    display.textContent = operate(storedNum, operator, activeNum);
    storedNum = Number(display.textContent);
  } else if (buttonPressed === "C") {
    clearAll();
  } else {
    alert("case default");
  }
});

// Functions
function operate(num1 = 0, operator = "+", num2 = 0) {
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
      else display.textContent = "Error";
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

function saveNum(num) {
  if (storedNum === null) {
    storedNum = Number(display.textContent);
  } else {
    activeNum = Number(display.textContent);
  }
}
