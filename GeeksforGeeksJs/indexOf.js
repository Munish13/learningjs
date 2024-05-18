// str.indexOf() function finds the index of the first occurrence of the argument string in the given string.
//  The value returned is 0-based. The syntax of the function is as follows: 

// str.indexOf(searchValue , index)

/**
 * Arguments: 
The first argument to the function searchValue is the string that is to be searched in the base string.
 The second argument to
 the function index defines the starting index from where the searchValue is to be searched in the base string.

 Return value: 
This function returns the index of the string (0-based) where the searchValue is found for the first time. 
If the searchValue cannot be found in the string then the function returns -1.

Example 1: 

In this example, the function indexOf() finds the index of the string Train.
 Since the first and the only index where this string is present is 9,
 therefore this function returns 9 as the answer.
 */

 // JavaScript to illustrate indexOf() function
// function func() {

//     // Original string
//     var str = 'Departed Train';

//     // Finding index of occurrence of 'Train'
//     var index = str.indexOf('Train');
//     console.log(index); 
// }
// func();


/***
 * Example 2: 

In this example, the function indexOf() finds the index of the string ed Tr.
 Since the first and the only index 
where this string is present is 6, therefore this function returns 6 as the answer.
 */

// JavaScript to illustrate indexOf() function
// function func() {

//     // Original string
//     var str = 'Departed Train';

//     // Finding index of occurrence of 'Train'
//     var index = str.indexOf('ed Tr');
//     console.log(index);  
// }
// func();


/**
 * Example 3: 

In this example, the function indexOf() finds the index of the string Train. 
Since the searchValue is not present in the string, therefore this function returns -1 as the answer.
 */

// JavaScript to illustrate indexOf() function
function func() {

    // Original string
    var str = 'Departed Train';

    // Finding index of occurrence of 'Train'
    var index = str.indexOf('train');
    console.log(index);  
}
func();