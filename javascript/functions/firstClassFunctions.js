/**
 * First class function
 *
 * A programing language is said to have First-class functions if functions in that language are treated like other variables.
 * So the function can be assigned to any other variable or passed as an argument or can be returned by another function.
 *
 *
 */

// 01

// const myFunction = function () { // first class function
//     console.log("Hello world");
// }

// myFunction();

// 02

// function sayHello() {
//     return "welcome to india"
// }

// function mainFunc(name, peramenterFunc) {
//     console.log(name, peramenterFunc());
// }

// mainFunc("Munish", sayHello)


// 03

function sayHello() {
    return function rick() {
        console.log("Hello rick");
    }

}

const output = sayHello();
output();

sayHello()();