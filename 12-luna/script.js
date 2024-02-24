function luna(str) {
  const sum = str
    .replaceAll("-", "")
    .split("")
    .map((el, i) => {
      if (i % 2 === 0) {
        let result = el * 2;
        if (result > 9) {
          result -= 9;
        }
        return result;
      }
      return el;
    })
    .reduce((acc, el) => {
      let num = Number(el);
      if (!isNaN(num)) {
        return acc + num;
      }
    }, 0);

  return sum % 10 === 0;
}

console.log(luna("4561-2612-1234-5464")); // 57 false
console.log(luna("4561-2612-1234-5467")); // 60 true
