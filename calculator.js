const display = document.getElementById("display");
const numbersArr = document.querySelectorAll(".number");
const operatorsArr = document.querySelectorAll(".operator");
const parenthesisArr = document.querySelectorAll(".parenthesis");
const decimalBtn = document.querySelector(".decimal");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");

let expression = "0";

const updateDisplay = () => {
  display.innerText = expression;
};

numbersArr.forEach(button => {
  button.addEventListener("click", () => {
    if (expression === "0") expression = "";
    expression += button.innerText;
    updateDisplay();
  });
});

operatorsArr.forEach(button => {
  button.addEventListener("click", () => {
    if (!/[+\-*/]$/.test(expression)) {
      expression += button.innerText;
      updateDisplay();
    }
  });
});

parenthesisArr.forEach(button => {
  button.addEventListener("click", () => {
    expression += button.innerText;
    updateDisplay();
  });
});

decimalBtn.addEventListener("click", () => {
  const lastNumber = expression.split(/[-+*/]/).pop();
  if (!lastNumber.includes(".")) {
    expression += ".";
    updateDisplay();
  }
});

equalsBtn.addEventListener("click", () => {
  try {
    expression = eval(expression).toString();
    updateDisplay();
  } catch {
    expression = "Error";
    updateDisplay();
  }
});

clearBtn.addEventListener("click", () => {
  expression = "0";
  updateDisplay();
});