/**
 * try catch block
 * 
 * try{
 *  some line of code
 * }catch(error){
 *  console.log(error)
 * }
 */

const username = "ricky";

try{
    console.log(myname);
    console.log(username);

}catch(error){
    console.log("main code not working have some error");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}