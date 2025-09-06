const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "bala@123";

const app = express();
app.use(express.json());

const user = [];
let todos = []; // { id, username, title, completed }
let todoId = 1;

function logger(req, res, next) {
    console.log(req.method + " request came");
    next();
}

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/todo.html");
});

app.post("/signup", logger, function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    user.push({
        username: username,
        password: password,
    });

    res.json({
        message: "You are signed up"
    });
});

app.post("/signin", logger, function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for (let i = 0; i < user.length; i++) {
        if (user[i].username === username && user[i].password === password) {
            foundUser = user[i];
        }
    }

    if (!foundUser) {
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

function auth(req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    if (decodedData.username) {
        next();
    } else {
        res.json({
            message: "You are not logged in"
        });
    }
}

app.get("/me", auth, function(req, res) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData.username) {
        let foundUser = null;

        for (let i = 0; i < user.length; i++) {
            if (user[i].username === decodedData.username) {
                foundUser = user[i];
            }
        }

        res.json({
            username: foundUser.username,
            password: foundUser.password
        });
    }
});

// Add a TODO
app.post("/todo", auth, function(req, res) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    const title = req.body.title;

    if (!title) {
        return res.status(400).json({ message: "Title is required" });
    }

    const todo = {
        id: todoId++,
        username: decodedData.username,
        title: title,
        completed: false
    };

    todos.push(todo);
    res.json({ message: "Todo added", todo: todo });
});

// Get all TODOs for logged in user
app.get("/todo", auth, function(req, res) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    const userTodos = todos.filter(function(t) {
        return t.username === decodedData.username;
    });

    res.json(userTodos);
});

// Delete a TODO
app.delete("/todo/:id", auth, function(req, res) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    const todoIdToDelete = parseInt(req.params.id);

    const index = todos.findIndex(function(t) {
        return t.id === todoIdToDelete && t.username === decodedData.username;
    });

    if (index === -1) {
        return res.status(404).json({ message: "Todo not found or unauthorized" });
    }

    todos.splice(index, 1);
    res.json({ message: "Todo deleted" });
});

app.listen(3000, function() {
    console.log("Server running on port 3000");
});
