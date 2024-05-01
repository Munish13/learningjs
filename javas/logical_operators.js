/**
 * Logical operators with conditional statements
 * 1. OR || // agar 1 condition bhi true ho jayegi to OR operator true me jayega
 * 2. AND &&  // if any one condition false it will give false to us. all the conditions must true it will
 * give true.
 * 3. NOT !
 * 4. NULLISH COALESCING ??
 * 
 */

const physics = 94;
const chemistry = 93;
const maths = 84;

// if(physics > 85 && chemistry > 85 && maths > 85){   
//     console.log("you can join our college");
// }else{
//     console.log("sorry");
// }

// if(physics > 85 || chemistry > 85 || maths > 85){
//     console.log("your maths is little bit week do more practice you are in.");
// }

const isStudendEligible = false;


const age = 19;

const enterInClub = age >= 18 ?
 "Please Go in you can enter in club" : "you are a kid please come when your age 18";

//  console.log(enterInClub);


if(age >= 18 && age > 18){
    console.log("go inside");
}else{
    console.log("Kid go home and study");
}
