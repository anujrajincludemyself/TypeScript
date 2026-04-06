"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let greet; //this is called as  signature of the function 
greet = (name, surname) => {
    console.log(`the name of person is ${name}${surname}`);
};
let calc; //now this is the signatur of the function 
calc = (numone, numtwo, symbol) => {
    if (symbol == "add") {
        return numone + numtwo;
    }
    else {
        return numone - numtwo;
    }
};
let logdetails;
logdetails = (ninjs) => {
    console.log(`the name of the person is ${ninjs.name}and the age is ${ninjs.age}`);
};
