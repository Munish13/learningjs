
/**
 * Nullish Coalescing // its only show second value when undefile and null
 */

//for example

// let userName = null;

// console.log(userName ?? "Munish");
let n = 5;
for (let i = 1; i <= n ; i++) {
    let str = "* ";
    console.log(str.repeat(i));
}



let m = 5;
for (let i = 1; i <= m; i++) {
    let str = "* ";
    let space  = '  ';
    console.log(space.repeat((m-i))+str.repeat(i));
}