const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null
};

const inputDigit = digit => {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }
  console.table(calculator);
};

const inputDecimal = dot => {
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
};

const handleOperator = nextOperator => {
  const { firstOperand, displayValue, operator } = calculator;
  // const inputValue = parseFloat(displayValue);

  if (firstOperand == null) {
    calculator.firstOperand = parseFloat(displayValue);
  }
  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.table(calculator);
};

function updateDisplay() {
  const display = document.querySelector("#screen");
  display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", event => {
  const { target } = event;
  if (!target.matches("button")) {
    return;
  }

  if (target.classList.contains("operator")) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains("decimal")) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains("all-clear")) {
    customLog(`clear, ${target.value}`, "error");
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});
