/**
 * call apply and bind
 */

let user = {
    name: "Munish",
    age: 30,
    displayMessage: function () {
        console.log(this.age); // implicit binding
    }
}
user.displayMessage();
function rick(degree, year) {
    console.log("Hello " + this.name, degree, year);  // explicit binding
}

// rick.call(user, "B.sc", 2015);

/**
 * apply()
 */

rick.apply(user, ["mtech", "2012"])  // for apply if we have perameter in function we have to pas in array as argument