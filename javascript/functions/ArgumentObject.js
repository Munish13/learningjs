/**
 * Argument Object
 * 
 * All the regular functions instead of Arrow functions have a special Object called Arguments 
 * Object that contains all the arguments passed to a function. It is an array Like Object present locally inside a function and 
 * it contains all the arguments passed to a function.
 */

function total(a, b) {
    return a + b;
}

let result = total(1, 2, 3, 4, 5);

console.log(result);