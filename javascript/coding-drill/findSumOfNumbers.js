/**
 * Find Sum of Numbers Less Than 40
 */

let arr = [1, 2, 3, 4, 5, 6, 70, 8, 9, 10];

// let result = arr.reduce((acc, curr) => curr < 40 ? acc + curr : acc, 0);

let result = arr.reduce((acc, cur) => {
    if (cur < 40) {
        return acc + cur;
    }
    else {
        return acc
    }
}, 0);

console.log(result);