function calculateDistance(addressLat, addressLong, positionLat, positionLong) {
  // Переводим координаты в радианы
  const lat1 = (addressLat * Math.PI) / 180;
  const lon1 = (addressLong * Math.PI) / 180;
  const lat2 = (positionLat * Math.PI) / 180;
  const lon2 = (positionLong * Math.PI) / 180;

  // Разницы координат
  const dLat = lat2 - lat1;
  const dLon = lon2 - lon1;

  // Расчет расстояния с использованием теоремы Пифагора
  const distance = Math.sqrt(dLat * dLat + dLon * dLon) * 111.32;
  // Перевод в километры, принимая во внимание, что один градус широты приблизительно равен 111.32 км
  return distance;
}

const addressLat = 10; // Пример широты назначения
const addressLong = 20; // Пример долготы назначения
const positionLat = 15; // Пример текущей широты пользователя
const positionLong = 25; // Пример текущей долготы пользователя

const distance = calculateDistance(
  addressLat,
  addressLong,
  positionLat,
  positionLong
);

console.log(
  `Расстояние между текущим местоположением и назначением составляет ${distance.toFixed(
    2
  )} км.`
);
