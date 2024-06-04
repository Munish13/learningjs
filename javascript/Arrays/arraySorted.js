
// let arr = [50, 40, 30, 20, 10];
// let n = arr.length;

// function arraySortedOrNot(arr, n) {
//     if (n === 0 || n === 1) return true; // Check if the array is empty or has only one element, return true.

//     for (let i = 1; i < n; i++)
//         // Iterate through the array starting from the second element.
//         // If an unsorted pair is found, return false.
//         if (arr[i - 1] > arr[i]) return 1;

//     // If no unsorted pair is found, return true.
//     return 0;
// }

// console.log(arraySortedOrNot());

let arr = [1,2,3,4]
let x = 3;

if(arr.indexOf(x) >= 0){
    let indexM = arr.indexOf(x);
    console.log(indexM);
}