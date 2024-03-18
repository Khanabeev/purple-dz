const names = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Макс" },
];

const uniqueIds = new Set();

const uniqueNames = names.filter((el) => {
  if (!uniqueIds.has(el.id)) {
    uniqueIds.add(el.id);
    return true;
  }
  return false;
});

console.log(uniqueNames);
