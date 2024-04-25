// read user data

/** Read data from user */

// install node packege  npm install readline-sync

const readlineSync = require("readline-sync");

const userName = readlineSync.question("May I know your name sir?");
const userAge = readlineSync.question("May I know you age");

// console.log("Welcome to Rudra technologies " + userName +"");

console.log(`Welcome to Rudra Tech ${userName}`);
// console.log(`Your age ${userAge}`);
const yearOfBirth = 2024 + Number(userAge);  // we have to covert it to Number with Numner() function

console.log(`you born : ${yearOfBirth}`);