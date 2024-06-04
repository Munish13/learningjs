/**
 * Array reference
 */
// this is call shallow copy
// let arr1 = [1,2,3];

// let arr2 = arr1;
// arr2.push(4);

// console.log(arr1);
// console.log(arr2);


//deep copy

// let arr3 = [1,2,3,4];

// let arr4 = [...arr3];

// console.log(arr4);
// arr4.push(5);
// console.log("updated arr3 - ", arr3);
// console.log("updated arr4 - ", arr4);


// we can convert string to array with spread operator

// let myName = "Munish";

// let arrayOfmyname = [...myName];
// console.log(arrayOfmyname);

// for(let i = 0; i< arrayOfmyname.length; i++){
//     console.log(arrayOfmyname[i]);
// }

// const arr = ["apple", "banana", "orange"];

// const newArr = arr.slice(0,2);

// console.log(newArr);

// let arr = [1, 8, 7, 56, 90];
// let n = 5;
// let arr = [1, 8, 7, 56, 90];

// function largest(arr) {
//     // write your code here
    
//     let i;
//     let maxVal = arr[0];
    
    
//     for(i = 1; i< arr.length; i++){
//         if (arr[i] > maxVal){
//             maxVal = arr[i];
//         }
        
//         return maxVal;
//     }
// }

// console.log(largest(arr));


function largest(arr) { 
    let i; 
   
    // Initialize maximum element 
    let max = arr[0]; 

    // Traverse array elements  
    // from second and compare 
    // every element with current max  
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) 
            max = arr[i]; 
    } 
     
    return max; 
} 
 
// Driver code 
let arr = [10, 324, 45, 90, 9808];
console.log("Largest in given array is " + largest(arr));