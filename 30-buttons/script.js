"use strict";

const wrapper = document.querySelector(".wrapper");
const counter = document.querySelector(".counter");
let count = 0;
counter.innerHTML = count;

for (let i = 0; i < 5; i++) {
  const el = document.createElement("button");
  el.setAttribute("data-id", i);
  el.innerHTML = "Нажми меня";
  wrapper.append(el);
}

wrapper.addEventListener("click", (event) => {
  const id = event.target.getAttribute("data-id");
  if (id) {
    const currentButton = document.querySelector(`[data-id="${id}"]`);
    for (let el of [...wrapper.children]) {
      el.innerHTML = "Нажми меня";
      el.classList.remove("clicked");
    }
    currentButton.innerHTML = "Нажата";
    currentButton.classList.add("clicked");

    count++;
    counter.innerHTML = count;
  }
});
