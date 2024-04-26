

/** Conditional statements */

const readlineSync = require("readline-sync");

// const userAge = readlineSync.question("How old your are sir..");

// if (userAge >= 18){
//     console.log("Hey man you can enter in club have fun...");
// }else{
//     console.log("Please come when your age 18 or above sir");
// }

const number = Number(readlineSync.question("Enter a number.. "));

const remainderDivisionWithThree = number % 3;
const remainderDivisionWithFive = number % 5;

// if (remainderDivisionWithThree === 0){
//     console.log("Fizz");
// }else if (remainderDivisionWithFive === 0){
//     console.log("Buzz");
// }

/**and && and or || oprator */

if (remainderDivisionWithThree === 0 && remainderDivisionWithFive === 0){
    console.log("Fizz");
} else if(remainderDivisionWithThree === 0 || remainderDivisionWithFive === 0){
    console.log("Buzz");
}


// and && logical oprator me dono conditions true honi chahiye tbhi code exicute hoga

// Or || logical operator me agar ak value bhi true mil jayegi to code exicute ho jayega