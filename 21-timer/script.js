"use strict";

function formatString(months, days, hours, minutes, seconds) {
  const rtf = new Intl.RelativeTimeFormat("ru", { numeric: "auto" });

  const parts = [
    { value: months, unit: "month" },
    { value: days, unit: "day" },
    { value: hours, unit: "hour" },
    { value: minutes, unit: "minute" },
    { value: seconds, unit: "second" },
  ];

  const formattedParts = parts.map((part) => {
    let res = rtf.format(part.value, part.unit);
    res = res.replace("через", "");
    return res;
  });

  return formattedParts.join(", ");
}
const newYear = new Date(new Date().getFullYear(), 11, 31);

setInterval(() => {
  const now = new Date();
  let distance = newYear - now;
  let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
  let days = Math.floor(
    (distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  console.log(formatString(months, days, hours, minutes, seconds));
}, 1000);
