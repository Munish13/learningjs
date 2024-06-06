/**
 * Function Borrowing  // always assing to a variable bind method
 */

const person1 = {
    name: "dinesh",
    age: 26,
    greet: function () {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}

const person2 = {
    name: "Munish",
    age: 30
}

/**
 * call() method
 */
person1.greet.call(person2);


/**
 * apply() method
 */
person1.greet.apply(person2);

/**
 * bind() method
 */
const greetPerson2 = person1.greet.bind(person2);
greetPerson2();



const greetPerson2WithPrefix = person1.greet.bind(person2, "Hello");
greetPerson2WithPrefix();