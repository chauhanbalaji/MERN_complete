const express = require("express");
const app = express();

const users = [{
    name: "Jhon",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());
  
app.get("/", function(req, res){
    // any time come "/" the req comes =>//write logic
    const johnkidneys = users[0].kidneys;
   const numberOfkidneys = johnkidneys.length;
   
   let numberOfHealthykidneys = 0;
   for (let i = 0; i<johnkidneys.length; i++){
    if (johnkidneys[i].healthy ){
        numberOfHealthykidneys = numberOfHealthykidneys + 1;
     }
   }
    const numberOfUnhealthykidneys = numberOfkidneys - numberOfHealthykidneys;

    res.json({
        numberOfkidneys,
        numberOfHealthykidneys,
        numberOfUnhealthykidneys
    })
})


app.post("/", function(req, res){
        console.log("Incoming body:", req.body);
   // any time come "/" the req comes =>//write logic
   // post req is you data to a body 
    
    
   const isHealthy = Boolean( req.body.isHealthy);
      console.log("Interpreted isHealthy:", isHealthy);


    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req, res){
  for (let i = 0; i<users[0].kidneys.length; i++){
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
})

// removing all the unhealthy kidneys
app.delete("/", function(req, res){

//     const newkidneys = [];
//     for (let i = 0; i<users[0].kidneys.length; i++){
//        if( users[0].kidneys[i].healthy) {
//         newkidneys.push({
//             healthy: true
//         })
//        }
//       }
//       users[0].kidneys = newkidneys;
//       res.json({msg: "done!"})
// })

if (isThereAtleastOneUnHealthykidney()){
    const newkidneys = [];
    for (let i = 0; i<users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newkidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys  = newkidneys;
    res.json({msg: "done"})

} else {
    res.sendStatus(411).json({
        msg: "You have a bad kidneys"
    });
}})

function isThereAtleastOneUnHealthykidney(){
    let atleastOneUnHealthykidney = false;
    for (let i = 0; i<users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnHealthykidney = true;
        }
    }
    return atleastOneUnHealthykidney
}

app.listen(3000)