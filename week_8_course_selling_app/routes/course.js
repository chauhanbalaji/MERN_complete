const {Router} = require("express");
const CourseRouter = Router();

    
    CourseRouter.post("/purchse", function(req, res) {
        res.json ({
            message: "signup endpoint"
        })
    });
    
    CourseRouter.get("/preview", function(req, res) {
        res.json ({
            message: "course preview endpoint"
        })
    });
    


module.exports = {
      CourseRouter: CourseRouter
}