/**
 * this keyword exercise
 */

function displayName() {
    console.log(this);
}

let user1 = {
    name: "Munish",
    displayName
}

user1.displayName();