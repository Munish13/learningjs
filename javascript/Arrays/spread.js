/**
 * spread operator
 */

let myArray = [1,2,3,4,5,6,7,8];

// console.log(myArray);
// console.log(...myArray);   // unpacking the array


let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9];

// let result = arr1.concat(arr2);   // we murge arrays with concat method
// console.log(result);

let result = [...arr1, ...arr2];
console.log(result);


let result2 = [arr1].push(arr2);

console.log(result2);