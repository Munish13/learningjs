/**
 * Object methods Key value and entries
 */

const Obj = {
    name: "Munish",
    age: 30,
    city: "Kurukshetra"
}

// let keys = Object.keys(Obj);
// console.log(keys);

let entries = Object.entries(Obj);
console.log(entries);

let values = Object.values(Obj);
console.log(values);

for (let i = 0; i < values.length; i++) {
    console.log(values[i])
}