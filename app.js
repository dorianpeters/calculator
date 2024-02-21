let firstNum = 0;
let secondNum = 0;
let operator;
let hiddenNum;
let priorButtonOperator;

const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");

buttons.addEventListener("click", (event) => {
  const buttonPressed = event.target.textContent;

  // isNaN type coersion behavior is intentional as numbers are in string format.
  switch (buttonPressed) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      if (priorButtonOperator) {
        display.textContent = "";
        priorButtonOperator = false;
      }
      display.textContent += event.target.textContent;
      break;
    case "C":
      clearAll();
      break;
    case "+":
    case "-":
    case "*":
    case "/":
    case "=":
      secondNum = Number(display.textContent);
      priorButtonOperator = true;
      if (buttonPressed !== "=") operator = buttonPressed;
      display.textContent = operate(firstNum, operator, secondNum);
      firstNum = Number(display.textContent);
      break;
    default:
      alert("case default");
  }
});

// Functions
function operate(num1, operator, num2) {
  let result = 0;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
  }
  return result;
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function clearAll() {
  firstNum = 0;
  secondNum = 0;
  tempNum = 0;
  operator = "";
  display.textContent = "";
}
