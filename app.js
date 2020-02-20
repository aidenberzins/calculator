const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null
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
    console.log(
      `%c operator ${target.value}`,
      `background: #353535; color: #bada55; padding: 10px;`
    );
    return;
  }

  if (target.classList.contains("decimal")) {
    console.log(`%c decimal${target.value}`, `color: #bada55; padding: 10px;`);
    return;
  }

  if (target.classList.contains("all-clear")) {
    console.log(
      `%c clear, ${target.value}`,
      `background: #222; color: yellow; padding: 10px;`
    );
    return;
  }

  console.log(
    `%c digit, ${target.value}`,
    `background: #222; color: #bada55; padding: 10px;`
  );
});
