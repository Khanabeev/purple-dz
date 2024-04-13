"use strict";

async function getRecreationActivity() {
  const res = await fetch(
    "https://www.boredapi.com/api/activity?type=recreational"
  );
  return res.json();
}

async function getEducationActivity() {
  const res = await fetch(
    "https://www.boredapi.com/api/activity?type=education"
  );
  return res.json();
}

async function getSocialActivity() {
  const res = await fetch("https://www.boredapi.com/api/activity?type=social");
  return res.json();
}

async function main() {
  try {
    const res = await Promise.race([
      getRecreationActivity(),
      getEducationActivity(),
      getSocialActivity(),
    ]);

    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

main();
