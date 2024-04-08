function rollDice(dice) {
  const diceNumber = Number(dice.replace("d", ""));
  if (Number.isNaN(diceNumber)) {
    return null;
  }
  if (diceNumber < 4 || diceNumber > 20 || diceNumber % 2 !== 0) {
    return null;
  }

  return Math.floor(Math.random() * (diceNumber - 1 + 1) + 1);
}

console.log(rollDice("d6"));
