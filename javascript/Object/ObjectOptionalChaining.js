/**
 * Optional Chaining Of Object
 */

const user = {
    man: {
        name: "ricky"
    } 
}

// console.log(user.cat?.name);
// console.log(user.man?.name);
// console.log(user.man.name);


/**
 * Example: Optional Chaining with Function Call
 */

let user1 = ()=> console.log("Ricky");

let user2 = {
    man(){
        console.log("Im ricky sharma");
    }
}

 let user3 = {};

user1?.();
user2.man?.(); 
// user3.man();// error
// user3.man?.(); // not a function inside of user3 object not give any error