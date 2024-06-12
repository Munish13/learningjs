

let stringM = "Munish";

// we have to find the character code of every character of string

let EncodedStr = (str) => {
    let encodeStr = "";
    let currentPos = 0, newPos = 0;
    for (let i = 0; i < str.length; i++) {
        currentPos = str.charCodeAt(i);
        // console.log(currentPos);
        newPos = currentPos + 2;
        // newStr = String.fromCharCode(newPos);
        // console.log(newStr);
        encodeStr += String.fromCharCode(newPos);
    }
    console.log(encodeStr)
}

EncodedStr(stringM)