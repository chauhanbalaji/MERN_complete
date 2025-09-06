require ('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const {userRouter} = require("./routes/user");
const { CourseRouter} = require("./routes/course");
const { adminRouter} = require("./routes/admin");
const app = express();

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", CourseRouter);
app.use("/api/v1/admin", adminRouter);
 
async function main() {
    //.env file shoulde put credentials detail 
    await mongoose.connect(process.env.MONGO_URL)
        app.listen(3000);
        console.log("listening on port 3000");
        }
main()