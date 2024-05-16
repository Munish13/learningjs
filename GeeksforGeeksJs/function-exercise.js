/**
 * Functions exercise
 */
function calcAddition(number1, number2) 
{ 
    return number1 + number2; 
}

console.log(calcAddition(2,3));

function calculatesum (minNumber, maxNumber){
        let total = 0;
        for(let i = minNumber; i<=maxNumber; i++){
            total = total + i ;
        }
        return total;
}

calculatesum(1,3);


var greet = function () {
    console.log("Welcome to GeeksforGeeks!");
};
 
greet();

// callback function
setTimeout(function () {
    console.log("Welcome to GeeksforGeeks!");
}, 2000);

// self-executing function
(function () {
    console.log("Welcome to GeeksforGeeks!");
})();


// arrow function

var greet = () =>
    {
        console.log("Welcome to GeeksforGeeks!");
    }
     
    greet();

    let greet = () => console.log("Welcome to GeeksforGeeks!");
greet();