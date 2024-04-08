"use strict";

class Character {
  #race;
  #name;
  #language;

  constructor(race, name, language) {
    this.#race = race;
    this.#name = name;
    this.#language = language;
  }

  speak() {
    console.log({
      language: this.#language,
      name: this.#name,
    });
  }
}

class Ork extends Character {
  #weapon;
  constructor(race, name, language, weapon) {
    super(race, name, language);
    this.#weapon = weapon;
  }

  hit = function () {
    console.log(`hit with ${this.#weapon}`);
  };
}

class Elf extends Character {
  #spell;
  constructor(race, name, language, spell) {
    super(race, name, language);
    this.#spell = spell;
  }

  castSpell() {
    console.log(this.#spell);
  }
}

const ork = new Ork("ork", "Bruk", "ork language", "Axe");
const elf = new Elf("elf", "Filaret", "elf language", "AaaaaVaaaaDakedaBraaa!");

ork.hit();
ork.speak();

elf.castSpell();
elf.speak();
