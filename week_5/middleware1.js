// const express = require("express");
// const app = express();

       //this section is middlewares 


       // app.use(function(req, res, next){
//     // console.log("request received ");
//     // req.name = "balaji"
//      res.json({
//         message: "You are not allowed"
//     })
//     // next();
      
// })

        /// end section of middleware becaues of (next is use it called middlewares and next function \)    


        //this section route 
// app.get("/sum",     function(req, res){
    
//     console.log(req.name);
//     console.log("request received ");
    
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a + b
//     })
// });

// app.listen(3000);


/////////////////////////////////# Route specific middlewares/////////////////////********** */

const express = require('express');
const app = express();

// Middleware function
function logRequest(req, res, next) {
  console.log(`Request made to: ${req.url}`);
  next();
}

// Apply middleware to a specific route
app.get('/special', logRequest, (req, res) => {
  res.send('This route uses route-specific middleware!');
});

app.get("/sum", function(req, res) {
    console.log(req.name);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});