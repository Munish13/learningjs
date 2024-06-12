/**
 * Remove Vowels from String
 * aeiou
 */

// let str = "this is my home im munish kumar sharma from india";

// function removeVowel() {
//     let VowelsArr = ["a", "e", "i", "o", "u"];
//     let resultString = "";
//     for (let char of str) {
//         if (!VowelsArr.includes(char.toLowerCase())) {
//             resultString += char
//         }
//     }
//     return resultString;

// }

// const finalStr = removeVowel(str);
// console.log(finalStr)

let str = "this is my 2 type of 3 things 12 mans have 23 dreams";

function removeNumbersAndVowels(str) {
    let numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // let Vowels = ["a", "e", "i", "o", "u"];
    let finalstr = "";

    for (let char of str) {
        if (isNaN(char)) {
            finalstr += char;
        }
    }
    return finalstr;
}

const result = removeNumbersAndVowels(str);
console.log(result);



const stringWithNumbers = "Hello123World456";
let stringWithoutNumbers = '';

for (let char of stringWithNumbers) {
    if (isNaN(char)) {
        stringWithoutNumbers += char;
    }
}

console.log(stringWithoutNumbers);