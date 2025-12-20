const display = document.getElementById("display");
const preview = document.getElementById("preview");
const MAX_DIGITS = 15;
let expression = "";
let solution = null;

function appendToDisplay(char) {
  if (display.value.length + 1 > MAX_DIGITS) return;

  display.value = display.value === "0" || display.value == 'Error' ? char : display.value + char;
  preview.textContent =
    preview.textContent === "0" ? char : preview.textContent + char;
}

resetDisplay();

function resetDisplay() {
  display.value = "0";
  preview.textContent = "";
}

document.querySelectorAll(".btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const value = this.value;

    if (value === "C") {
      handleClear();
    } else if (value === "%") {
      handlePercentage();
    } else if (value === "Back") {
      handleBackspace();
    } else if (value === "=") {
      handleEquals();
    } else if (["+", "-", "*", "/"].includes(value)) {
      handleOperator(value);
    } else if (!isNaN(value)) {
      handleNumber(value);
    } else if (value === ".") {
      handleDecimal();
    }
  });
});