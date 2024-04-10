"use strict";

class Billing {
  #amount;

  constructor(amount) {
    this.#amount = amount;
  }

  calclulateTotal() {
    return this.#amount;
  }

  getAmount() {
    return this.#amount;
  }
}

class FixBilling extends Billing {
  hours;

  constructor(amount, hours) {
    super(amount);
    this.hours = hours;
  }

  calclulateTotal() {
    return this.getAmount() * this.hours;
  }
}

class ItemBilling extends Billing {
  itmes;

  constructor(amount, itmes) {
    super(amount);
    this.itmes = itmes;
  }

  calclulateTotal() {
    return this.getAmount() * this.itmes;
  }
}

const fixBilling = new FixBilling(100, 2);
const itemBilling = new ItemBilling(50, 8);

console.log("fix", fixBilling.calclulateTotal());
console.log("item", itemBilling.calclulateTotal());
