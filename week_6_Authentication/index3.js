const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "bala@12345";

const app = express();
app.use(express.json()); // <== IMPORTANT

const user = [];

app.post("/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password; // fixed

    user.push({
        username: username,
        password: password,
    });

    res.json({
        message: "You are signed up"
    });
});

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password; // fixed

    let foundUser = null;

    for (let i = 0; i < user.length; i++) {
        if (user[i].username === username && user[i].password === password) { // fixed
            foundUser = user[i];
        }
    }

    if (!foundUser) { // fixed
        res.json({
            message: "Credentials incorrect"
        });
        return;
    } else {
        const token = jwt.sign({ username }, JWT_SECRET);
        res.json({
            token: token
        });
    }
});

app.get("/me", function (req, res) {
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData.username){
        let foundUser = null;

        for (let i = 0; i < user.length; i++){
            if (user[i].username === decodedData.username) {
                foundUser = user[i]
            }
        }
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })

    }
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
