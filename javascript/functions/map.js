/**
 * Map - Filter
 */


const arr = [1, 2, 3, 4, 5];

function squareOfNumbers(number) {
    return number ** 2;
}

// const output = arr.map(squareOfNumbers);
// console.log(output);


// with arrow function 

// const squareOfNum = arr.map((number) => {
//     return number ** 2;
// })
const squareOfNum = arr.map((number) => number ** 2);
console.log(squareOfNum);