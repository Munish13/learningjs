/**
 * Constructor " New "
 */

// function User() {
//     this.name = "Munish",
//         this.age = "sharma"
// }

// const user = new User();

// console.log(user.name);


function User(name, age) {
    this.name = name,
        this.age = age
}

const user = new User("Munish", 30);

console.log(user);