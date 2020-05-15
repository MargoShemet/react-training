import {name7} from "./_sub.js"
console.log {name7}
let student = {name: "Margo", surname: "Shemet", age: 29};
console.log(student.name);
let { name, surname, age } = student;
console.log( age );

let sum2num = (a,b) => {
    return a+b;
}
console.log(sum2num(5,100));

let p = new Promise( (resolve, reject)=>{
    throw new Error("ERROR NOT FOUND");
} );
p.catch();