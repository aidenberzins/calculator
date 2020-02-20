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
<<<<<<< HEAD
    console.log(
      `%c operator ${target.value}`,
      `background: #353535; color: #bada55; padding: 10px;`
    );
=======
    console.log("operator", target.value);
>>>>>>> 61b2026e46ab3a696a10a44f72c8cf375c7f3a14
    return;
  }

  if (target.classList.contains("decimal")) {
<<<<<<< HEAD
    console.log(`%c decimal${target.value}`, `color: #bada55; padding: 10px;`);
=======
    console.log("decimal", target.value);
>>>>>>> 61b2026e46ab3a696a10a44f72c8cf375c7f3a14
    return;
  }

  if (target.classList.contains("all-clear")) {
<<<<<<< HEAD
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
=======
    console.log("clear", target.value);
    return;
  }

  console.log("digit", target.value);
>>>>>>> 61b2026e46ab3a696a10a44f72c8cf375c7f3a14
});
