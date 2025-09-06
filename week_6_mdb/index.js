// const express = require("express");

// // const {Usermodel, TOdomodel} = require("./db");
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// const JWT_SECRET =  "bala@123";

// // mongoose.connect("mongodb+srv://onlysoftware200:<db_password>@cluster0.bnwus6f.mongodb.net/")

// const app = express();
// app.use(express.json());

// app.post("/signup", async function(req, res){
//     const email = req.body.email;
//     const password = req.body.password;
//     const name = req.body.name;

//     await Usermodel.create({
//         name: "bala",
//         password: "123",
//         email: "bala@gmail.com"
//     })

//     res.json({
//         message: "You are logged in"
//     })
// });

// app.post("/login", async function(req, res){
//     const email = req.body.email;
//     const password = req.body.password;

//     const user = await Usermodel.findOne({
//         email: email,
//         password: password
//     })

//     console.log(user);

//     if (user) {
//         const token = jwt.sign({
//             id: user._id

//         }, JWT_SECRET);
//         res.json({
//             message: "Incorrect credential"

//         });
//     }
    

// });

// app.post("/todo",function(req, res){

// });

// app.get("/todos",function(req, res){

// });

// function auth(req)

// app.listen(3000);



