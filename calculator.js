let currentValue = "";
let operator = "";
let total = 0;
let resultElement = document.getElementById("result");

function appendToResult(value) {
  currentValue += value;
  resultElement.innerText = currentValue;
}

function appendOperator(op) {
  if (currentValue !== "") {
    operator = op;
    total = eval(total + operator + currentValue);
    currentValue = "";
    resultElement.innerText = total;
  }
}

function calculate() {
  if (currentValue !== "") {
    total = eval(total + operator + currentValue);
    currentValue = "";
    resultElement.innerText = total;
  }
}

function clearResult() {
  currentValue = "";
  operator = "";
  total = 0;
  resultElement.innerText = "0";
}
