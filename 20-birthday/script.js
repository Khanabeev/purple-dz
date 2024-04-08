"use strict";

function isOlderThanFourteen(birthdayDate) {
  const today = new Date();
  const birthday = new Date(birthdayDate);
  const diff = today.getTime() - birthday.getTime();

  return diff / (1000 * 60 * 60 * 24 * 365.25) > 14;
}
