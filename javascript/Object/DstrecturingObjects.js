/**
 * Desctructuring object
 */

// const obj = {
//     name: "Munish",
//     age: 30,
//     address: {
//         city: "Kurukshetra",
//         state: "Haryana"
//     },
//     courses: ["html", "css", "js", "react"]
// }

// let { name, address: { city, state }, courses } = obj;

// console.log(city);

const employees = {
    first: {
        name: "Munish",
        email: "munishkumar.web@gmail.com",
        address: {
            city: "kurukshetra",
            state: "haryana",
            international: {
                country: "India",
                reg: "Hindu"
            }
        }
    }
}

let { first: { address: { international: { country, reg } } } } = employees;

console.log(country, reg);