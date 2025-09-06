// try{
//     let a;
//     console.log(a.length);
//     console.log("hi there from inside");
// }  catch(e) {
//     console.log("inside catch statement");
    
// }

// //try catch syntax

// console.log("hi there");

 
const jwt = require("jsonwebtoken");

// decode, verify,  generate 

const value = {
    name: "bala",
    accountNumber: 21123
}

//jwt sign is generating token

const token = jwt.sign(value, "secrete")
console.log(token);

// this token has been generated using this secret, and henece this token 
//can only be verified using this secret