const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

function userMiddleware(req, res,  next){
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_USER_PASSWORD);

    if (decoded) {
        req.useId = decoded.id;
        next()
    } else {
        res.ststus(402).josn({
           message: "You are not signed in"
        })
    }
}

module.exports = {
    userMiddleware: userMiddleware
}