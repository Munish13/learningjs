/**
 * Variable Scope - Global, Local and Block Scope
 *
 *
 * We generally have three types of scope
1) Global Scope
2) Local Scope
3) Block Scope

 */


//Example of Global Variable: 

// var x = 6; //Global Scope 

// function hello() {

//     console.log(x);

// }

// hello();


// Local Scope

// var x = 6; //Global Scope 

// function hello() {
//     var y = 17; // Local Scope
//     console.log(x);
//     console.log(y);
// }

// hello();



// Block scope

{
    let a = 10;
    let b = 20;

}
console.log(a);
console.log(b);
