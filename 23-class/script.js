"use strict";

class Car {
  #brand;
  #model;
  #distanceTravelled;

  constructor(brand, model, distanceTravelled) {
    this.#brand = brand;
    this.#model = model;
    this.#distanceTravelled = distanceTravelled;
  }

  get distanceTravelled() {
    return this.#distanceTravelled;
  }

  set distanceTravelled(distance) {
    this.#distanceTravelled = distance;
  }

  info() {
    console.log(this.#brand, this.#model, this.#distanceTravelled);
  }
}

const car = new Car("Volvo", "S50", 300);
car.info();
car.distanceTravelled = 100;
car.info();
