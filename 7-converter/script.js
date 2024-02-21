function convert(amount, originalCurrency, targetCurrency) {
  const rate = {
    USDRUB: 92.35,
    USDEUR: 0.93,
    RUBUSD: 0.011,
    RUBEUR: 0.01,
    EURUSD: 1.08,
    EURRUB: 99.81,
  };

  const key = originalCurrency + targetCurrency;
  if (!rate[key]) {
    return null;
  }

  return amount * rate[key] + " " + targetCurrency;
}

console.log(convert(100, "RUB", "EUR"));
