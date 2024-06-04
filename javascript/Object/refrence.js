/**
 * Object refrence and shallow copy
 * shallow copy- two object after copy on same location
 * deep copy: after copy object go to diffrent location
 */

// Object shallow copy

const person1 = {
    name: "Munish",
    age: 30,
    address: {
        city: "kurukshetra",
        state: "haryana"
    }
}

// const person2 = Object.assign({}, person1);  // this is a shallow copy if any nested object its only work for one object
// person2.age = 111;

// const person2 = person1;  // this is called shallow copy
// person2.age = 123;

// console.log(person1);
// console.log(person2);

const person2 = { ...person1 };  // this is also a shallow copy when using nested objects
person2.address.city = "kalkata";
person2.address.state = "bangal";

console.log(person1);
console.log(person2);