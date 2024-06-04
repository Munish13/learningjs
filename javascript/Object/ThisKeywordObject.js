/**
 * "this" keyword
 * 
 * Here's an example to illustrate this:
 */

const person = {
    name: "ricky",
    age: 30,
    NameAge: function(){
        console.log(`my name is ${this.name} and my age is ${this.age}`);
    }
}

person.NameAge();


/**
 * Constructor Invocation: If a function is called with the new keyword, this refers to the newly created object.
 */

function Person(name,age){
    this.name = name;
    this.age = age;
    this.fullDetails = function() {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}

const person2  = new Person("Munish", 30);

person2.fullDetails();