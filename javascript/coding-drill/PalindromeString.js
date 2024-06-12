/***
 * Palindrome String
 */

const str = "munish";

function getReverseStr(str) {
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr;
}

const result = getReverseStr(str);
if (str === result) {
    console.log("String is a Palindrom")
} else {
    console.log("String is not a Palindrom");
}
// console.log(result);


// if we want to convert string to an array we have to use split method

// const arrOfStr = str.split("");
// // console.log(arrOfStr);
// const reverseArr = arrOfStr.reverse();
// const reverseStr = reverseArr.join("");
// console.log(reverseStr);
// console.log(reverseArr);
// we can write this code in a single line

// reverseStr = str.split("").reverse("").join("");

// if (str == reverseStr) {
//     console.log("String is a Palindrom")
// } else {
//     console.log("String is not a Palindrom");
// }