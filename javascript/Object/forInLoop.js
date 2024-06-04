/**
 * For in loop
 */

// let list = [1,2,3,4,5,6,7,8,9,10];

// let total = 0;

// for(let items in list){
//     total += list[items];
// }

// console.log(total)




/**
 *  Second Method
 */

const courses = {
    firstCourse: "Html",
    secondCourse: "css",
    thirdCourse: "javascript"
};

  // Creating a new empty object with
    // prototype set to courses object

const student1 = Object.create(courses);

student1.id = 121;
student1.firstName = "Munish";
student1.EnrolledCourses = function (){
    console.log(courses);
} 


// console.log(courses);
// console.log(student1);

for(let prop in student1){
    console.log(`${prop} -> ${student1[prop]}`);
}