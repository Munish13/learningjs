/**
 * Arrow function
 */


let myFunction = ()=> {
    return "Hello world";
}

console.log(myFunction());

const total = (x,y)=> x > y ? x + y : x - y;

const sum = total(12,13);
console.log(sum);