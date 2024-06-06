/**
 * map(), reduce() and filter() functions
 */

// arr = new Array(1, 2, 3, 6, 5, 4);
// for (let i = 0; i < 6; i++) {
//     arr[i] *= 3;
// }
// console.log(arr);



// map method
// arr = [1, 2, 3, 4, 5, 6]

// function triple(n) {
//     return n * 3;
// }

// let newarry = arr.map(triple);

// console.log(newarry);

// reduce method

// arr = new Array(1, 2, 3, 6, 5, 4);
// result = 1
// for (let i = 0; i < 6; i++) {
//     result = result * arr[i];
// }
// console.log(result);

// let arr = [1, 2, 3, 6, 5, 4]

// function products(a, b) {
//     return a * b;
// }

// let result = arr.reduce(products)
// console.log(result);

//filter method

let arr = [1, 2, 3, 5, 7, 8];

function div(a) {
    return a % 2 == 0;
}

let result = arr.filter(div)
console.log(result);