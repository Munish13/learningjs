
/**
 * Higher-Order function
 *  A Higher-Order function is a function that receives a function as an argument or returns function as output.
 */


// 01
// function wrapper() {
//     return "Welcome to india";
// }
// // Higher Order function when function accepting a function as an peramenter and as argument
// function greetMessage(wrapper) {
//     console.log("Munish", wrapper());
// }

// greetMessage(wrapper);


// 02  Higher order function
// function myFunction() {
//     return function rick() {
//         console.log("ricky bhai function working");
//     }
// }
// let output = myFunction();
// output();

// myFunction()();



// function fxn1() {
//     return "Hello";
// }

//fxn2 recieves a function 'fxn1' as parameter
//Therefore, fxn2 this is a higher order function
// function fxn2(fxn1) {
//     console.log(fxn1(), "Geeks");
// }

// fxn2(fxn1);



// function fxn1() {
//     return function () {
//         console.log("Hello Geeks");
//     }
// }

// //accepting the function returned from fxn1() and calling it.
// const fxn2 = fxn1();
// fxn2();

// we have to do a squere of all the numbers in array write a function for this
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function squareOfNUmbers(arr) {
//     let squareNumbers = [];
//     for (number of arr) {
//         squareNumbers.push(number ** 2);
//     }
//     return squareNumbers;
// }

// let output = squareOfNUmbers(arr);
// console.log(output);



// // to find a cube of numbers
// function cubeOfNumbers(arr) {
//     let cubeNumbers = [];
//     for (number of arr) {
//         cubeNumbers.push(number ** 3);
//     }
//     return cubeNumbers;
// }

// let cubeResult = cubeOfNumbers(arr);
// console.log(cubeResult);


const arr = [1, 2, 3, 4, 5, 6, 7];

function square(number) {
    return number ** 2;
}
function cube(number) {
    return number ** 3;
}

function calculateSquare(squarePer, arr) {
    let emptyArr = [];
    for (let number of arr) {
        emptyArr.push(squarePer(number));
    }
    return emptyArr;
}

let output = calculateSquare(square, arr);
console.log(output);

let cubeResult = calculateSquare(cube, arr);
console.log(cubeResult);

