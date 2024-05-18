function func() {

    // Original string
    var str = 'JavaScript is object oriented language';

    // Finding the character at given index 
    var value = str.charAt(0); 
    var value1 = str.charAt(4); 
    console.log(value); 
    console.log(value1);
}
func();



// JavaScript to illustrate charAt() function
function func() {

    // Original string
    var str = 'JavaScript is object oriented language';

    // Finding the character at given index 
    var value = str.charAt(50);
    console.log("Char at index 50 is: "+value);    
}
func();



// JavaScript to illustrate charCodeAt() method

function func() {
    var str = 'ephemeral';

    // Finding the code of the character at
    // given index 
    var value = str.charCodeAt(4);
    console.log(value);    
}

func();



// JavaScript to illustrate charCodeAt() method

function func() {
    var str = 'ephemeral';

    // Finding the code of the character 
    // at given index 
    var value = str.charCodeAt(20);

    console.log(value);    
}
func();