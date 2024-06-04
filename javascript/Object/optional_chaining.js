/**
 * Optional chaining  ?.
 */

const person1 = {
    name: "ricky",
    age: 30,
    // address: {
    //     city: "kurukshetra",
    //     state: "haryana"
    // }
    getDisplayMessage: () => {
        console.log("display message");
    }

}


console.log(person1.address?.city);
person1.getDisplayMessage();
person1.getDisplayAddress?.();