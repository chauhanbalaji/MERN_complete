const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");

function adminMiddleware(req, res,  next){
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);

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
    adminMiddleware: adminMiddleware
}