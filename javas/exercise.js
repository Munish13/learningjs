/**
 * javascript exercise
 */

// const symbol = "* ";

// for(let i= 1; i<= 5; i++){
//     console.log(symbol.repeat(i))
// }


// const n = 4;
// for(let i = n; i>= 1; i--){
//     console.log(symbol.repeat(i));
// }


const symbol = "* ";

// for(let i= 5; i<= 5; i++){
//     for(let j = 1; j<=5; j++ ){
//         console.log(symbol.repeat(i))
//     }
// }
// let num = 4;

// let s = "* ";
//         for(let i = 5; i<= 5 ; i++){
//             for(let j = num; j<= 5; j++){
//                 console.log(s.repeat(i))
//             }
//         }


/**
 * Given a range of number 1 to 101 and find all the even numbers.
 * 
 */
// let remainder;
// for(let i = 1; i<101; i++){
//     remainder = i % 2;
//     if(remainder === 0){
//         console.log(`${i} is an even number`);
//     }else{
//         console.log(`${i} is an numbers`);
//     }
// }


// const inputstring = "I love my india";

// let vowel = "aeiou";
// for(let i = 0; i<inputstring.length; i++){
//     if(vowel.includes(inputstring[i])){
//         console.log(`${inputstring[i]} is a vowel`);
//     }else{
//         console.log(`${inputstring[i]} is not a vowel`);
//     }
// }

// function firstDigit(num) {
//     while (num >= 10) {
//         num /= 10
//     }
//     return Math.floor(num); 

    
// }
// console.log(firstDigit(219));

let sum = 0;
const n = 100;

for (let i = 1; i <= n; i++){
    // += i;
    let valueof = i;
    //console.log(valueof+sum);
}

//console.log(`sum: ${sum}`);

function foo(bar){
    bar = bar ?? 55;
    console.log(bar);
    console.log("-");
}
foo();
foo(22);