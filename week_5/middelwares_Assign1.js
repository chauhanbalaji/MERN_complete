// const express = require("express");

// const app = express();

// // const loggermiddleware = require("logger"); // is the libary if we write this , we should not write below code function 
// //logger

// //logs the method, timestamp and the url

// function loggerMiddlewares(req, res,  next){
//     console.log("Method is " + req.method);
//     console.log("Host is " + req.Hostname);
//     console.log("Route is " + req.url);
//     console.log(new Date());

//     next();
    

// }

// app.use(loggerMiddlewares);

// app.get("/sum", function(req, res) {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a + b
//     })
// });

// app.get("/multiply", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;
//     res.json({
//         ans: a * b
//     })
// });

// app.get("/divide", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;
//     res.json({
//         ans: a / b
//     })

// });

// app.get("/subtract", function(req, res) {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//         ans: a - b
//     })
// });

// app.listen(3000);



const express = require("express");
const bodyParser = require("body-parser");

const app = express();


//in Express, if U want to send JSON data.
// you need to first parse the JSON data

app.use(bodyParser.json());

app.post("/sum", function(req, res) {
    console.log(req.body);
    
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    })
});




app.listen(3000);