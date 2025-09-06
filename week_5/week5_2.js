const express = require("express");
const app = express();

let requestCount = 0;

function requestIncreaser(req, res, next){
    requestCount = requestCount + 1;
    if (req.body.cookie === "google"){
        next()

    }else{
        console.log("Total number of request = " + requestCount);
        res.json({
            message: "I ended the request early"
        })
    }
}

function realSumHandler(req, res){
    console.log("control reached the real handler");
    
    //main logic
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    console.log(req.name);

    res.json({
        ans: a + b,
    });


}

app.use(requestIncreaser)
//better rounting,  add database,  middlewares 

app.get("/sum",  realSumHandler);

app.get("/multiply",  realSumHandler);

app.get("/admin",  realSumHandler);


app.listen(3000);