let firstNum;
let secondNum;
let operator;
let displayContent = "";

const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");

buttons.addEventListener("click", (event) => {
  const buttonPressed = event.target.textContent;
  // isNaN type coersion behavior is intentional as numbers are evaluated in string format.
  if (isNaN(buttonPressed)) {
    // Code that deal with operators
  } else {
    displayContent += event.target.textContent;
    display.textContent = displayContent;
  }
});

// Functions

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
  }
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

// Notes:
// Click number -> display on screen -> appended to a string
// Click operator -> store that, string is coverted to a number
// click number -> blanks out the display, start new string.
// Click operator or equals ->  convert num2 from display to number, do calculation, dispaly answer, num1
