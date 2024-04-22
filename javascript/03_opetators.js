// Operators :
// Operators are symbols in programming that perform specific
//  operations on one or more values, variables, or expressions. There are several types of operators in JavaScript as follows.

// 1) Arithmetic Operators: Arithmetic operators are used to perform basic mathematical operations like addition, subtraction, multiplication, and division. 
// The following are the arithmetic operators in JavaScript:


// +    // Addition
// -    // Subtraction
// *    // Multiplication
// /    // Division
// %    // Modulus
// ++   // Increment
// --   // Decrement


// //Example:

// let x = 10;
// let y = 5;

// console.log(x + y);  // Output: 15
// console.log(x - y);  // Output: 5
// console.log(x * y);  // Output: 50
// console.log(x / y);  // Output: 2
// console.log(x % y);  // Output: 0
// console.log(++x);    // Output: 11
// console.log(--y);    // Output: 4


// 2) Assignment Operators: Assignment operators are used to assign values to variables. The following are the assignment operators in JavaScript:

// =    // Assignment
// +=   // Addition assignment
// -=   // Subtraction assignment
// *=   // Multiplication assignment
// /=   // Division assignment
// %=   // Modulus assignment
// Example:

// let x = 10;
// let y = 5;

// x += y;  // Equivalent to x = x + y
// console.log(x);  // Output: 15

// y -= x;  // Equivalent to y = y - x
// console.log(y);  // Output: -10
 

// //3) Comparison Operators: Comparison operators are used to compare two values and return a Boolean value. The following are the comparison operators in JavaScript:

// // ==   // Equal to
// // !=   // Not equal to
// // ===  // Strict equal to
// // !==  // Strict not equal to
// // >    // Greater than
// // >=   // Greater than or equal to
// // <    // Less than
// // <=   // Less than or equal to
// // Example:

// x = 10;
// let y = 5;

// console.log(x == y);   // Output: false
// console.log(x != y);   // Output: true
// console.log(x === 10); // Output: true
// console.log(x !== "10");  // Output: true
// console.log(x > y);    // Output: true
// console.log(x <= y);   // Output: false
 

// //4) Logical Operators: Logical operators are used to combine two or more Boolean expressions and return a Boolean value. The following are the logical operators in JavaScript:

// &&   // Logical AND
// ||   // Logical OR
// !    // Logical NOT
// Example:

// //javascriptCopy codelet x = 10;
// let y = 5;

// console.log(x > 5 && y < 10);   // Output: true
// console.log(x > 5 || y > 10);   // Output: true
// console.log(!(x > y));         // Output: false
 

// // 5) Bitwise Operators: Bitwise operators are used to perform operations on binary representations of numbers. The following are the bitwise operators in JavaScript:

// // // Bitwise AND (&): Sets each bit to 1 if both bits are 1.
// // Bitwise OR (|): Sets each bit to 1 if at least one of the bits is 1.
// // Bitwise XOR (^): Sets each bit to 1 if only one of the bits is 1.
// // Bitwise NOT (~): Inverts all the bits.
// //Example :

// // Bitwise AND
// let a = 5;     // 0101
// let b = 3;     // 0011
// let c = a & b; // 0001 (1)

// // Bitwise OR
// let d = a | b; // 0111 (7)

// // Bitwise XOR
// let e = a ^ b; // 0110 (6)

// // Bitwise NOT
// let f = ~a;    // 1010 (-6)
// // Operator Precedence Order :
// // Operator precedence is the order in which operators are evaluated in an expression. It determines which operator is executed first. Here is the order of precedence for the operators in JavaScript (from highest to lowest):

// // Grouping: ()
// // Increment/decrement: ++, --
// // Multiplication/division/modulus: *, /, %
// // Addition/subtraction: +, -
// // Comparison: <, >, <=, >=
// // Equality: ==, !=
// // Logical AND: &&
// // Logical OR: ||
// // Conditional: ?:
// // Assignment: =, +=, -=, *=, /=, %=
