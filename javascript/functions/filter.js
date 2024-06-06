/**
 * Filter higher order function
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function filterNumber() {
//     const tempArr = [];
//     for (let number of arr) {
//         if (number > 5) {
//             tempArr.push(number)
//         }
//     }
//     return tempArr;
// }

// const result = filterNumber(arr);
// console.log(result);

// const result = arr.filter((number) => number > 5);

// console.log(result);

const result = arr.filter((number) => {
    return number / 2 == 0;
});

console.log(result);