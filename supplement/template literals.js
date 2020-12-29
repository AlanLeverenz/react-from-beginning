// Supplemental

// template literals using grave marks

const firstName = "Rob";
const lastName = "Bunch";
// const fullName = firstName + lastName;
console.log(fullName);
// => RobBunch

const firstName = "Rob";
const lastName = "Bunch";
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

console.log(`The year is ${new Date().getFullYear()}, and I'm excited`);