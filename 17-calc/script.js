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

function reset() {
  resetNums();
  result.innerText = 0;
}

function resetNums() {
  num1.value = "";
  num2.value = "";
}

function plus() {
  result.innerText = Number(num1.value) + Number(num2.value);
  resetNums();
}

function minus() {
  result.innerText = Number(num1.value) - Number(num2.value);
  resetNums();
}

function multiply() {
  result.innerText = Number(num1.value) * Number(num2.value);
  resetNums();
}

function divide() {
  result.innerText = (Number(num1.value) / Number(num2.value)).toFixed(2);
  resetNums();
}
