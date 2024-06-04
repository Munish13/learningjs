/**
 * basic object
 */


let school = {
    name: 'Vivekananda School',
    location : 'Delhi',
    established : '1971',
    displayInfo : function(){
        console.log(`${this.name} was established in ${this.established} at ${this.location}`);
    }
    
}
// return school.displayInfo();


let obj = {
    1 : "ricky",
    2 : "sharma"
}


console.log(obj["2"]);