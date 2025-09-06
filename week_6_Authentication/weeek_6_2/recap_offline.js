const jwt = require("jsonwebtoken");

//decode,  verify, generate

const value = {
    name: "bala",
    accountNumber: 1233554
}

//sign is it to write not generate

const token = jwt.sign(value, "secrete");
console.log(token);

// this token has been generated using this server,  and hence this token can only be verified using this secret
/// this is your chequebook

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmFsYSIsImFjY291bnROdW1iZXIiOjEyMzM1NTQsImlhdCI6MTc0NTk1MzA3OH0.4ivxSTLe80L-vwd_RAJhht91q1jzdNVT4lhKMylz0Qw
