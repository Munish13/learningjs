/**
 * Pure function
 */

/**
 * A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. 
 * It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.
 */

function calculateGST(productPrice) {  // pure function
    return productPrice * 0.05;
}

console.log(calculateGST(799));


var tax = 20;
function calculateGST(productPrice) {   // not a pure function
    return productPrice * (tax / 100) + productPrice;
}