/**
 * this keyword in object
 * Refers to the object that is executing the function
 */

const obj = {
    name: "Munish",
    greet: function () {
        console.log("Hello " + this.name); // implicit binding
    }
}


obj.greet();    