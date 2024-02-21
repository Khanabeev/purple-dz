const hasLicense = true;
const age = 18;
const isDrunk = false;

const result = hasLicense && age >= 18 && !isDrunk ? "может" : "не может";

console.log(result);
