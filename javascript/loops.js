// Loops In JavaScript :
// Loops are used to execute a block of code repeatedly as long as a certain condition is met. There are several types of loops available:

// 1. for loop: A for loop is used to execute a block of code for a specified number of times. The syntax of a for loop is as follows:

// for (initialization; condition; increment/decrement) {
//   // code to be executed
// }
// Here, initialization is executed before the loop starts, condition is checked before each iteration, and increment/decrement is executed at the end of each iteration.

// Example:

for (let a = 0; a < 5; a++) {
    console.log(a);
  }


//   2. while loop: A while loop is used to execute a block of code as long as a certain condition is true. The syntax of a while loop is as follows:

// while (condition) {
//   // code to be executed
// }

let b = 0;
while (b < 5) {
  console.log(b);
  b++;
}


// 3. do...while loop: A do...while loop is similar to a while loop, but it executes the block of code at least once, even if the condition is false. The syntax of a do...while loop is as follows:

// do {
//   // code to be executed
// } while (condition);
// Example:


let c = 0;
do {
  console.log(c);
  c++;
} while (c < 5);


// 4. for...in loop: A for...in loop is used to loop through the properties of an object. The syntax of a for...in loop is as follows:

// for (variable in object) {
//   // code to be executed
// }
// Example:

const person = {
    name: 'John',
    age: 30,
    gender: 'male'
  };
  
  for (let values in person) {
    console.log(`${values}: ${person[values]}`);
  }


//   5. for...of loop: A for...of loop is used to loop through the elements of an iterable object, such as an array or a string. The syntax of a for...of loop is as follows:

// for (variable of iterable) {
//   // code to be executed
// }

const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}