const express =  require("express");

const app = express();
app.use(express.json());

const user = [];

// function generateToken(){
//     return Math.random()
// }

//should return a random return long string
function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token = token + options[Math.floor(Math.random() * options.length)]; //a=> 42 |  Math.random() * option.length => 22.2121| Math.floor=>22
    }
    return token;
}

app.post("/signup", function(req, res){

    const username = req.body.username;
    const password = req.body.password;
    
    // if (user.json(u => u.username === username)){
    //     res.json({
    //         message: "You are already siginedup"
    //     })
    // }
    
    user.push({
        username: username,
        password: password,
    })

    res.json({
        message: "You are sigined in"
    })
    
    console.log(user);
})

app.post("/signin", function(req, res){

    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for (let i = 0; i<user.length; i++) {
         if (user[i].username == username && user[i].password == password)
        {
            foundUser = user[i]
        }
    }
       // map and filter logic function
     
       // const foundUser = users.find(function(u){
    //   if (user.username == username && user.password == password) {
    //     return true;
    //   } else{
    //     return false
    //   }
    // }
       
    if (foundUser){
        const token =  generateToken();
        foundUser.token = token;
        res.json({
            token: token
        })
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
   console.log(user);
   
})

app.get("/me", function(req, res){
    const token = req.headers.token
    let foundUser = null;

    for (let i = 0; i < user.length; i++) {
        if(user[i].token == token) {
            foundUser = user[i]
        }
    }

    if(foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else{
        res.json({
            message: "token invalid"
        })
    }
})

app.listen(3000); //that the http server is listening on part 3000
