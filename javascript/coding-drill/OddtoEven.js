/**
 * Odd even convert
 */

let numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.map((num) => {
    return num % 2 === 0 ? num - 1 : num + 1;
})

console.log(result)