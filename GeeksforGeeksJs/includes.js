/**
 * string.include()
 */

const displayMessage = "I love to code in light mode";

//console.log(displayMessage.includes("mode"));
// if(displayMessage.includes("dark")){
//     console.log("The person loves to code in dark mode");
// }else{
//     console.log("Person loves to code in light mode");
// }

const vowel = "aeiou";
let flag = false;

// for(let char of displayMessage){
//     if(vowel.includes(char)){
//         console.log(`${char} is vowel`);
//     }
// }

for(let char of displayMessage){
    if(vowel.includes(char)){
        flag = true;
        break;
    }else{
        flag = false;
    }
}

if(flag === true){
    console.log("vowel in this string");
}else{
    console.log("no vowel in this string");
}


var str = "Welcome to GeeksforGeeks.";
var check = str.includes("h",-2);
console.log(check);