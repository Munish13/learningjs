
// const arr = [51, 54, 99, 32];


// function search(arr, N, X) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.length === N) {
//             if (arr[i] == X) {
//                 console.log(i);
//             }
//         } else {
//             console.log("-1")
//         }

//     }

// }

// search(arr, 4, 100);

// let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0];

// function countZeroes(arr, n) {
//     // write your code here
//     for (let i = 1; i < n; i++) {
//         if (arr[i] == 0) {
//             console.log(arr[i]);
//         }
//     }

// }

// countZeroes(arr, 12)

let nums = [-12, 8, -7, 6, 12, -9, 14]
function posAverage(nums) {
    //code here
    const positiveNum = nums.filter(num => num >= 0);
    const totalSum = positiveNum.reduce((acc, num) => acc + num, 0);

    const count = positiveNum.length;

    if (count === 0) {
        return 0;
    } else {
        return totalSum / count;
    }
}

console.log(posAverage(nums));