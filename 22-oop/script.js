"use strict";

const Character = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

Character.prototype.speak = function () {
  console.log({
    language: this.language,
    name: this.name,
  });
};

const Ork = function (race, name, language, weapon) {
  Character.call(this, race, name, language);
  this.weapon = weapon;
};

Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;
Ork.prototype.hit = function () {
  console.log(`hit with ${this.weapon}`);
};

const Elf = function (race, name, language, spell) {
  Character.call(this, race, name, language);
  this.spell = spell;
};

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.castSpell = function () {
  console.log(this.spell);
};

const ork = new Ork("ork", "Bruk", "ork language", "Axe");
const elf = new Elf("elf", "Filaret", "elf language", "AaaaaVaaaaDakedaBraaa!");

ork.hit();
ork.speak();

elf.castSpell();
elf.speak();
