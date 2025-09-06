const express =  require("express");

const app = express();

// app.get("/add", function(req, res ){
//     const a = parseInt(req.query.a);
//     const  b = parseInt(req.query.b);

//     res.json({
//         answer: a + b
//     })

// })

app.get("/add/:firstArg/:secondArg", function(req, res ){
    const a = parseInt(req.params.firstArg);
    const  b = parseInt(req.params.secondArg);

    res.json({
        answer: a + b
    })

})

app.get("/multiple", function(req, res){

})

app.listen(3000);