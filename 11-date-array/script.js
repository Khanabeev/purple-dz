function filterValidDate(dateArray) {
  return dateArray
    .filter((date) => {
      // Проверка на соответствие одному из допустимых форматов даты: DD.MM.YYYY, DD/MM/YYYY, DD-MM-YYYY
      const isValid = /^\d{2}[./-]\d{2}[./-]\d{4}$/.test(date);
      if (!isValid) {
        return false;
      }

      // Проверка на корректность даты
      const [day, month, year] = date.split(/[./-]/);
      const dateObject = new Date(`${year}-${month}-${day}`);
      const isValidDate = dateObject instanceof Date && !isNaN(dateObject);
      return isValidDate;
    })
    .map((date) => {
      // Приведение даты к формату DD-MM-YYYY
      const [day, month, year] = date.split(/[./-]/);
      return `${day}-${month}-${year}`;
    });
}

const dates = [
  "10.11.2023",
  "test",
  "00/11/1988",
  "01/00/0000",
  "10-11-2023",
  "111.121.20213",
  "44.33.9999",
  "--.12/2121",
  "2-1-2021",
  "01.01.2021",
  "a1=01=2021",
];
console.log(filterValidDate(dates)); //[ '10-11-2023', '10-11-2023', '01-01-2021' ]

let str = "How are you?";
str = str.padStart(1, "%");
console.log(str);
