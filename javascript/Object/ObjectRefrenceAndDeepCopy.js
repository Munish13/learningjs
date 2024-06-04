/**
 * Object Refrence and Deep Copy
 */

const person = {
    firstname : "Munish",
    lastname: "Sharma"
}

// let p1 = {
//     ...person
// };

// p1.firstname = "Dinesh";

// let p2 = Object.assign(person);

// p2.firstname = "Rudr";

let p3 = JSON.parse(JSON.stringify(person));

p3.firstname = "Ram Dayal";

console.log(person);
// console.log(p1);
// console.log(p2);
console.log(p3);