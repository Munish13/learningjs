/**Ternary ooperator */ //condition ? yes : no ;

const totalMarks = 60;

// if (totalMarks < 40){
//     console.log("you should hard work");
// }else{
//     console.log("You cleared the exam nicely done");
// }

// (totalMarks < 40) ? console.log("you should work hard") : console.log("you cleard the exam great")

// second method to write 

const result = totalMarks < 40 ? "you should work hard" : "you passed congo";

console.log(result);

const result2 = totalMarks < 40 ? "tou should work hard" 
: totalMarks < 60 ? "B grade" : totalMarks < 75 ? "A grade" 
:totalMarks < 85 ? "A+" : "Genius";

console.log(result2);