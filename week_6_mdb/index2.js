const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { default: z } = require("zod");

mongoose.connect("")

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
    const requireBody = z.object ({
        email: z.string(),
        password: z.string().min(3).max(30),
        name: z.string().min(3).max(30)
    })

    
   const parsedDataWithSucess = requireBody.safeParse(req, body);

   if (!parsedDataWithSucess.success) {
    res.json ({
        message: "Incorrect format"
    })
     return
   }
    //   input validation  

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    
    let errorThrown = false;
    
    try{

        const hashedPassword =  await bcrypt.hash(password, 5);
        console.log(hashedPassword);
        
        
        await UserModel.create({
            email: email,
            password: password,
            name: name
        });
        throw new Error("User already exists")
    } catch(e){
        res.json({
            message: "User already exists"
        });
        console.log("Error while putting in the DB");
        errorThrown = true;
    }
     
    if (!errorThrown) {
            res.json({
            message: "You are signed up"
        })
            }
    });
    

app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
        password: password,
    });
 
   const passwordMatch = bcrypt.compare(password, response.password);

    if (response) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});


app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000);