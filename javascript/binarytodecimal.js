function toDecimal(str) {
    // write your code here-
    let ans = parseInt(str, 2).toString(10);
    console.log(ans);
}

toDecimal(100);



// decimal to binary

function toBinary(str) {
    // write your code here
   let ans = (str >>> 0).toString(2);
   console.log(ans);
    
    
}

toBinary(8);