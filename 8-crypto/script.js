function crypto(password) {
  const arr = password.split("").reverse();
  const splicePassword = arr.splice(Math.ceil(arr.length / 2));

  theLastLetter = arr.pop();
  arr.unshift(theLastLetter);

  return arr.concat(splicePassword).join("");
}

function check(cryptoPassword, originalPassword) {
  const arr = cryptoPassword.split("");
  const splicePassword = arr.splice(Math.ceil(arr.length / 2));

  theFirstLetter = arr.shift();
  arr.push(theFirstLetter);

  const result = arr.concat(splicePassword).reverse().join("");

  return result === originalPassword;
}

console.log(check("wdrossap", "password")); // true
console.log(check("wdrossap", "wrong")); // false
