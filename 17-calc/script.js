"use strict";

let num1 = document.querySelector('input[name="num-1"]');
let num2 = document.querySelector('input[name="num-2"]');
let result = document.querySelector(".result");

document.querySelectorAll("input").forEach((el) => {
  el.addEventListener("input", function () {
    const maxLength = 10; // Максимальное количество цифр
    if (this.value.length > maxLength) {
      this.value = this.value.slice(0, maxLength);
    }
  });
});

function calculate(action) {
  let n1 = Number(num1.value);
  let n2 = Number(num2.value);
  let res = 0;
  switch (action) {
    case "plus":
      res = n1 + n2;
      break;
    case "minus":
      res = n1 - n2;
      break;
    case "multiply":
      res = n1 * n2;
      break;
    case "divide":
      res = (n1 / n2).toFixed(2);
      break;
    case "reset":
      result.innerText = 0;
      break;
    default:
      throw new Error(`Неизвестное выражение`);
  }
  result.innerText = res;
  num1.value = "";
  num2.value = "";
}
