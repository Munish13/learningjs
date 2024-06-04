// import chalk from 'chalk';

// console.log(chalk.blue('Hello world!'));

// import figlet from "figlet";

// figlet("Munish Kumar", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

async function api1(){
  let fetchRes = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1");
    return fetchRes;
}

async function api2(){
  let fetchRes = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1");
    return fetchRes.json();
}

async function myFun(){
  try {
    const [res1, res2] = await Promise.all([api1(), api2()])
    console.log(res1);
    console.log(res2);
    // const apiVar = await  api1();
  } catch (error) {
    console.log(error);
  }
  // console.log("Hello api");
}
myFun();

