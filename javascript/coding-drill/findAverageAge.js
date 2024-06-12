/**
 * average of numbers and age
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 16, 17, 23, 23,];


const total = arr.reduce((acc, cur) => acc + cur, 0);

const averageOf = total / arr.length;

console.log(averageOf);