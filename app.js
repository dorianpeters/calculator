let firstNum;
let secondNum;
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
      hiddenNum = Number(display.textContent);
      priorButtonOperator = true;
      operator = buttonPressed;
      display.textContent = operate(firstNum, operator, secondNum);
      firstNum = Number(display.textContent);
      break;
    default:
      alert("case default");
  }
});

//   if (isNaN(buttonPressed)) {
//     if (buttonPressed === "C") {
//       clearAll();
//     } else {
//       // if +,-,*,/,= pressed...
//       operator = buttonPressed;
//       if (firstNum === undefined) {
//         firstNum = tempNum;
//       } else {
//         secondNum = tempNum;
//         // Code probably wrong
//         displayContent = operate(firstNum, operator, secondNum);
//         display.textContent = displayContent;
//       }
//     }
//   } else {
//     if (operator !== "") {
//       display.textContent = "";
//     }
//     displayContent += event.target.textContent;
//     display.textContent = displayContent;
//     tempNum = Number(displayContent);
//   }
// });

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
  firstNum = undefined;
  secondNum = undefined;
  tempNum = 0;
  operator = "";
  display.textContent = "";
}

// Notes:
// Click number -> display on screen -> appended to a string
// Click operator -> store that, string is coverted to a number
// click number -> blanks out the display, start new string.
// Click operator or equals ->  convert num2 from display to number, do calculation, dispaly answer, num1
