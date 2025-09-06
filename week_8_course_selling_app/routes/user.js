const {Router} = require("express");
const { userModel, purchseModel } = require("../db");
const jwt = require("jsonwebtoken");
// const JWT_USER_PASSWORD = "baba123"
const { JWT_USER_PASSWORD } = require("../config");

const userRouter = Router();

userRouter.post("/signup", async function(req,res) {
    const { email, password, firstName, lastName } = req.body;  //TODO: adding zod validation
    //TODO: hash the password so plaintext pw is not stored in the db 

   
    await  userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName

    });
    res.json ({
        message: "signup endpoint"
    })
});

userRouter.post("/signin", async function(req, res){
    
    const { email, password } = req.body;
    
    //TODO: ideally password should be hashed, and hence you cant compare the user provided password and the database password 
    const user = await userModel.find({
        email: email,
        password: password
    });
    
    if (user) {
        jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD);

        res.json({
            token: token
        })

    } else {

        res.status(403).json ({
            message: " Incorrect credentials "
        })
    }
});

userRouter.post("/purchse", userMiddleware, async function(req, res) {
    //you would expect the user to pay you money
     
    const userId = req.userId;
    const courseId = req.body.courseId;
      
   await purchseModel.create({
        userId,
        courseId,
    })
    res.json ({
        message: "course purchse endpoint"
    })
});

 userRouter.post("/preview", userMiddleware, function(req, res) {
    res.json ({
        message: "course purchse endpoint"
    })
});
module.exports = {
    userRouter: userRouter
}