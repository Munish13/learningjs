/**
 * Keys, Values & entires Object => Object.entries()
 */


const obj = {
    name : "ricky",
    age: 30,
    city: "Kurukshetra"
}

const etries = Object.entries(obj);
console.log(etries);

/**
 * 2) Object.keys(): this method returns an array containing all the keys of an Object.
 */

const keysOfObject = Object.keys(obj);
console.log(keysOfObject);

/**
 * 3) Object.values(): this method returns an array containing all the values of the Object.
 */

const objValues = Object.values(obj);
console.log(objValues);