// Arrays
// In JavaScript, an array is an object that stores a collection of elements. Arrays can store elements of any data type, including other arrays, and can be dynamically resized. Each element in an array is assigned a unique index, starting from 0.

// Syntax:

//arrayName = [element1, element2, element3, ...];

//where arrayName is the name you give to the array, and element1, element2, element3, etc. are the values you want to store in the array.

// Built-In Methods
// length: returns the number of elements in the array.
// push(): adds one or more elements to the end of the array.
// pop(): removes the last element from the array and returns it.
// shift(): removes the first element from the array and returns it.
// unshift(): adds one or more elements to the beginning of the array.
// splice(): removes elements from the array and/or adds new elements.
// concat(): joins two or more arrays and returns a new array.
// slice(): extracts a portion of an array and returns a new array.
// indexOf(): returns the index of the first occurrence of a specified element in the array.
// forEach(): calls a function for each element in the array.
// map(): creates a new array with the results of calling a function for each element in the array.
// filter(): creates a new array with all elements that pass a test implemented by a function.
// reduce(): applies a function to each element in the array to reduce the array to a single value.

// Examples :
// 1. push() , splice () :

let myArray = ["apple", "banana", "cherry"];

console.log(myArray.length);  // to check the length of array

myArray.push("kivi");  // with push() method we can add in end of array
myArray.splice(1,2, "newkivi", "mango");  // we can use splice to add element in array like splice(index, howmanyelements, "elements")
console.log(myArray);


// 2. map() :  metthod

const numbersM = [1, 2, 3, 4, 5];

const squareofNumbers =   numbersM.map(num => num * num);

console.log(squareofNumbers);


// 3. reduce() :

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, currval) => acc + currval, 0);
console.log(sum); // Output: 15


// 4. filter() :

const numbersF = [1, 2, 3, 4, 5];
const evenNumbers = numbersF.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]