// // Manipulating objects and arrays
// // Objects and Arrays can be manipulated using various methods and techniques. Here are some common ways 
// of manipulating objects and arrays:

// // 1. Accessing properties: Objects and arrays can be accessed using their properties or keys. For objects, you can use the 
// dot notation or the square bracket notation to access
//  its properties. For arrays, you can use the index notation.

const person = {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY'
    },
    hobbies: ['reading', 'swimming', 'traveling']
  };
  
//   console.log(person.name); // output: John
//   console.log(person['address']['city']); // output: New York
//   console.log(person.hobbies[1]); // output: swimming   will use this method to get value from array inside of object

console.log(person.address.state);   //1st method to get state from nested object
console.log(person["address"]["street"]);   //2nd method to get state from nested object


//2. Adding properties: You can add new properties to an object or elements to an array using the dot notation or the square bracket notation.


const person2 = {
    name: "ricky",
    age : 29

}

person2.address ={
    city: "kurukshetra",
    state: "Haryana",
    Village: "Shanti Nagar"
}

person2.hobbies = ["cricket", "valorant", "bgmi"]

console.log(person2);


// 3. Deleting properties: You can delete properties from an object using the delete keyword.

const person4 = {
    name: "bicky",
    age: 26,
    hobby: "daru"
}

delete person4.hobby;

console.log(person4);



// 4. Looping through objects and arrays: You can use loops to iterate through objects and arrays. 
// For objects, you can use the for...in loop, and for arrays, you can use the for loop or the forEach method.

const person5 = {
    name: 'John',
  age: 30,
  hobbies: ['reading', 'swimming', 'traveling']

  // using "for in" loop
}

for(let key in person5){   //  here we are using for in loop
    console.log(`${key} : ${person5[key]}`);
}

person5.hobbies.forEach(hobby => {   // here we are using forEach loop
    console.log(hobby);
  });


// //   5. Copying objects and arrays: Objects and arrays can be copied using various methods 
// such as the spread operator, Object.assign(), and the slice() method.

const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2); // output: [1, 2, 3]

// Copying an object using Object.assign()
const obj1 = { a: 1, b: 2 };
const obj2 = Object.assign({}, obj1);
console.log(obj2); // output: { a: 1, b: 2 }
