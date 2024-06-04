/**
 * Computed Properties
 */
// Method 1

// let lastName = "lastname";

// let fullname = {
//     firstname : "Munish",
//     [lastName]: "Brahaman"
// };

// console.log(fullname);


// Method 2

let lastName = "lastname";

let fullname = {
    firstname : "Munish"
};

fullname[lastName] = "Pandit";

console.log(`My fullname is ${fullname.firstname} ${fullname[lastName]}`);
