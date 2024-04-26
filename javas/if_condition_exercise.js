

const firstString = "apple";
const secondString = "banana";
const thirdString = "kivi";

const firstStringLength = firstString.length;  // using .length to checking the length of string
const secondStringLength = secondString.length;
const thirdStringLength = thirdString.length;


if (firstStringLength < secondStringLength && firstStringLength < thirdStringLength) {
    console.log(`${firstString} is smallest string`);
}else if(secondStringLength < firstStringLength && secondStringLength < thirdStringLength){
    console.log(`${secondString} is smallest string`);
}else if (thirdStringLength < firstStringLength && thirdStringLength < secondStringLength){
    console.log(`${thirdString} is smallest string`);
}else{
    console.log(`Found two or more string as the same value`);
}